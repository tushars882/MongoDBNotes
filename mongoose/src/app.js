const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Identity")
  .then(() => console.log("connection success"))
  .catch((err) => console.log(err)); //sometime there are deprecated error check what are they
//in the above connect , the segment refers as a promise to store and return data whenever it is needed in the future (Read promises in javascript)

//first we define a schema according to which docment will be  created
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  active: Boolean,
  author: String,
});

//creating a collection
const Playlist = new mongoose.model("Playlist", playlistSchema); //name of the collection must start with capital

//create document or insert using async await



/*const reactPlaylist = new Playlist({
  name: "tushar",
  ctype: "front end",
  active: true,
  author: "tusharist",
});
reactPlaylist.save();*/
//this is a promise as described above and to increase the efficiency in terms of time taken we use ascync await as described below




const createDocument = async () => {
  try {
    //we have put the above document in try so to try to input and obtain error in catch if not able to do it
    const reactPlaylist = new Playlist({
      name: "atul",
      ctype: "back end",
      active: true,
      author: "tusharist",
    });
    const jsPlaylist = new Playlist({
      name: "sagar",
      ctype: "back end",
      active: true,
      author: "tusharist",
    });
    const mongPlaylist = new Playlist({
      name: "Luv",
      ctype: "front end",
      active: true,
      author: "hero!",
    });

    const result = await Playlist.insertMany([jsPlaylist,mongPlaylist,reactPlaylist]); //here simply we have given permission to wait and have printed the result in cmd too
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

//createDocument(); 
//we have called the function created to insert the document


//we will read our documents here
const getDocument=async()=>{
  // const result =await Playlist.find({ctype:"front end"}).select({name:1});
  const result = await Playlist.find();
  

  console.log(result);
}

getDocument();
