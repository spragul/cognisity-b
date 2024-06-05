import SiteModel from "../Model/siteSchema.js";

export const sitecreate = async (req, res) => {
  console.log(req.body)
  try {
    if (req.body.problem !== "") {
      let site = await SiteModel.create(req.body);
      res.status(200).json({ message: "Site add successful", site ,rd:true});
    } else {
      res.status(400).json({ message: "Site data empty" ,rd:false});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong", error, rd: false });
  }
};

export const sitedelete = async (req, res) => {
  console.log(req.params.id)
  try {
    let site = await SiteModel.findOne({ _id: req.params.id });
    console.log(site)
    if (site) {
      let deletedata = await SiteModel.deleteOne({ _id: site._id });
      res.status(200).json({ message: "Site Delete successful", deletedata,rd:true });
    } else {
      res.status(400).json({ message: "Site id empty" ,rd:false});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong", error, rd: false });
  }
};

export const getAllsite = async (req, res) => {
  try {
    let site = await SiteModel.find({});
    res.status(200).json({ message: "Site get successful", site ,rd:true});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong", error, rd: false });
  }
};
