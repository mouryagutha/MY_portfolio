import React, { useEffect, useState } from "react";
import {
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { usersCollectionRef } from "./firebase"; // Adjust the import as needed
import { FaMapMarkerAlt, FaUserCircle, FaRegSmile } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const UserGreeting = () => {
  const [fpHash, setFpHash] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [location, setLocation] = useState("");
  const [ip, setIp] = useState("");

  const fetchUserLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      setLocation(data.city + ", " + data.country_name);
      setIp(data.ip);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const handleAddOrUpdateData = async (fpHash) => {
    const q = query(usersCollectionRef, where("userId", "==", fpHash));
    const querySnapshot = await getDocs(q);
    const newVisitDate = new Date();

    if (!querySnapshot.empty) {
      // User exists, update their visit count, last visit date, IP, and location
      const userDoc = querySnapshot.docs[0];
      const userRef = doc(usersCollectionRef, userDoc.id);
      const newVisitCount = userDoc.data().visits + 1;
      await updateDoc(userRef, {
        lastVisit: newVisitDate,
        visits: newVisitCount,
        lastVisitIp: ip,
        lastVisitLocation: location,
      });
      setUserDetails({
        docId: userDoc.id,
        lastVisit: newVisitDate,
        visits: newVisitCount,
        lastVisitIp: ip,
        lastVisitLocation: location,
      });
    } else {
      // User doesn't exist, add them to the database
      const docRef = await addDoc(usersCollectionRef, {
        userId: fpHash,
        lastVisit: newVisitDate,
        visits: 1,
        lastVisitIp: ip,
        lastVisitLocation: location,
      });
      setUserDetails({
        docId: docRef.id,
        lastVisit: newVisitDate,
        visits: 1,
        lastVisitIp: ip,
        lastVisitLocation: location,
      });
    }
  };

  useEffect(() => {
    const setFp = async () => {
      const fp = await FingerprintJS.load();
      const visitor = await fp.get();
      const { visitorId } = visitor;
      setFpHash(visitorId);
      await fetchUserLocation();
      await handleAddOrUpdateData(visitorId);
    };
    setFp();
  }, []);

  return (
    <div className=" mt-52 lg:mt-20 p-6 text-sm rounded-lg shadow-lg text-white text-center">
      {userDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        className="mx-auto text-left  max-w-2xl">
          <p className="flex space-x-2 text-[1.4rem] mb-4">
            <span>Welcome back, visitor {userDetails.docId}</span>
          </p>
          <p className="flex   text-left space-x-2 text-base">
            <span className="font-semibold">
              Ah, you're from {location}! What a wonderful place.
            </span>
          </p>
          <p className="flex my-3 text-left space-x-2 text-base">
            <span>
              This is your{" "}
              <span className="font-bold text-xl">{userDetails.visits}</span>{" "}
              visit! May the Force be with you!
            </span>
          </p>
          <p className="flex  my-2 text-left space-x-2 text-base">
            <span>
              <Typewriter
                options={{
                  strings: [
                    `Welcome to the Dark Side!`,
                    `Winter is Coming!`,
                    `Bankai Sembonzakura Kageyoshi!`,
                    `Mangekyo Sharingan!`,
                    `Rasengan!`,
                    `Chidori!`,
                    `Bankai!`,
                    `Getsuga Tensho!`,
                    `Shinra Tensei!`,
                    `Yokoso Watashino Soul Society!`,
                    `Ichimonji!`,
                    `Bankai kami shini no yari!`,
                    `Gum-Gum Jet Pistol!`,
                    `Gear Fifth!`,
                    `Diablo Jambe!`,
                    `Santhoryu!`,
                    `Divine Departure!`,
                    `I am off the radar!`,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  delay: 1,
                }}
              />
            </span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default UserGreeting;
