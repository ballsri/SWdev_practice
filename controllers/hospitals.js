//@desc     Get all hospitals
//@routes   Get /api/v1/hospitals
//@acess    Public
exports.getHospitals=(req,res,next)=>{
    res.status(200).json({success:true, msg:'Show all hospitals'});
};

//@desc     Get a single hospital
//@routes   GET /api/v1/hospitals/:id
//@acess    Public
exports.getHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Show ${req.params.id} hospital`});
};

//@desc     Create new hospital
//@routes   POST /api/v1/hospitals
//@acess    Private
exports.createHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Create new hospital`});
};

//@desc     Update hospital
//@routes   PUT /api/v1/hospitals/:id
//@acess    Private
exports.updateHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Update ${req.params.id} hospital`});
};

//@desc     Delete hospital
//@routes   DELETE /api/v1/hospitals/:id
//@acess    Private
exports.deleteHospital=(req,res,next)=>{
    res.status(200).json({success:true, msg:`Delete ${req.params.id} hospital`});
};