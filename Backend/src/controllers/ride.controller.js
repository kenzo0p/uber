import {
  getAddressCoordinate,
  getCaptainsInTheRadius,
} from "../services/maps.service.js";
import { createRide, getFare , confirmRide , endRide ,startRide } from "../services/ride.service.js";
import { validationResult } from "express-validator";
import { sendMessageToSocketId } from "../socket.js";
import { Ride } from "../models/ride.model.js";
export const createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userId, pickup, destination, vehicleType } = req.body;
  try {
    const ride = await createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    return res.status(201).json(ride);
    const pickupCoordinates = await getAddressCoordinate(pickup);
    const captainsInRadius = await getCaptainsInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
    );
    ride.otp = "";
    const rideWithUser = await Ride.findOne({_id:ride._id}).populate('user')
    captainsInRadius.map(captain => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error" });
  }
};

export default getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;
  try {
    const fare = await getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const confirmRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { rideId } = req.body;

  try {
      const ride = await confirmRide({ rideId, captain: req.captain });

      sendMessageToSocketId(ride.user.socketId, {
          event: 'ride-confirmed',
          data: ride
      })

      return res.status(200).json(ride);
  } catch (err) {

      console.log(err);
      return res.status(500).json({ message: err.message });
  }
}

export const startRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { rideId, otp } = req.query;

  try {
      const ride = await startRide({ rideId, otp, captain: req.captain });

      console.log(ride);

      sendMessageToSocketId(ride.user.socketId, {
          event: 'ride-started',
          data: ride
      })

      return res.status(200).json(ride);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  }
}

export const endRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { rideId } = req.body;

  try {
      const ride = await endRide({ rideId, captain: req.captain });

      sendMessageToSocketId(ride.user.socketId, {
          event: 'ride-ended',
          data: ride
      })



      return res.status(200).json(ride);
  } catch (err) {
      return res.status(500).json({ message: err.message });
  } s
}