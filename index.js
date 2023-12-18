const express = require("express");
const cors = require("cors");
const app = express();
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const { doc, setDoc } = require("firebase/firestore");

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());
app.get("/",(req,res)=>{
	res.send("hello");
})
app.post("/", async (req, res) => {
	// console.log(req)
	const{image,tag}=req.body;
	const firebaseConfig = {
		apiKey: "AIzaSyBEDprNZsnE47poIacZb0wU5QvRxQKrNAk",
		authDomain: "capstonev1-91070.firebaseapp.com",
		projectId: "capstonev1-91070",
		storageBucket: "capstonev1-91070.appspot.com",
		messagingSenderId: "394752715124",
		appId: "1:394752715124:web:89abccca3209817cb12421",
		measurementId: "G-N6NGSG0RB2"
	  };

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	try{
		await setDoc(doc(db, "capstone", "garbage"), {
			image: image,
			tag:"hello"
		});
	}catch(err){
		console.log(err)
	}
	
});
app.listen(3000, () => {
	console.log("Server running ", 3000);
});
