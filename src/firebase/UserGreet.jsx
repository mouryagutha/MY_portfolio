import { useEffect, useState } from "react";
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
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUser, FaEye } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
const UserGreeting = () => {
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
      await fetchUserLocation();
      await handleAddOrUpdateData(visitorId);
    };
    setFp();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-52 lg:mt-20 px-4 text-white text-center">
      {userDetails && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mx-auto text-left max-w-3xl relative group"
        >
          {/* Animated gradient border effect */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          
          {/* Main card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/90 via-purple-900/50 to-blue-900/50 border border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
            
            {/* Floating particles effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <motion.div
                animate={{ y: [-20, 20], x: [-10, 10] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [20, -20], x: [10, -10] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 right-10 w-3 h-3 bg-pink-400 rounded-full blur-sm"
              />
              <motion.div
                animate={{ y: [-15, 15], x: [15, -15] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/2 right-20 w-2 h-2 bg-blue-400 rounded-full blur-sm"
              />
            </div>

            {/* Header with visitor ID */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10"
            >
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                <FaUser className="text-2xl text-purple-300" />
              </div>
              <div>
                <p className="text-sm text-white/60 font-mono uppercase tracking-wider">Visitor ID</p>
                <p className="text-lg font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                  {userDetails.docId}
                </p>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="ml-auto"
              >
                <IoSparkles className="text-3xl text-yellow-300" />
              </motion.div>
            </motion.div>

            {/* Location info */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-start gap-3 mb-5 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20"
            >
              <FaMapMarkerAlt className="text-xl text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-base text-white/90 font-medium">
                  Ah, you're from <span className="text-cyan-300 font-bold">{location}</span>!
                </p>
                <p className="text-sm text-white/70 mt-1">What a wonderful place. 🌏</p>
              </div>
            </motion.div>

            {/* Visit count */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 mb-5 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20"
            >
              <FaEye className="text-xl text-pink-400 flex-shrink-0" />
              <p className="text-base text-white/90">
                This is your{" "}
                <span className="inline-block px-3 py-1 mx-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-bold text-xl shadow-lg shadow-purple-500/50">
                  {userDetails.visits}
                </span>
                visit! May the Force be with you! ⚔️
              </p>
            </motion.div>

            {/* Animated typewriter section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="relative mt-6 p-5 rounded-xl bg-black/40 border border-white/10 overflow-hidden"
            >
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-bl-3xl"></div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs text-green-400 font-mono uppercase tracking-widest">Terminal Active</span>
              </div>
              
              <div className="text-lg text-yellow-300 font-mono">
                <span className="text-green-400">$ </span>
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
                    delay: 50,
                  }}
                />
              </div>
            </motion.div>

            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserGreeting;
