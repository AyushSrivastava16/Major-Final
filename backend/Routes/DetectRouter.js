const ensureAuthenticated = require('../Middlewares/Auth');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const router = require('express').Router();






// ensureAuthenticated,   ye reh gaya hai
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to process individual frames
router.post('/pose', upload.single('frame'), (req, res) => {
    const frameBuffer = req.file.buffer;

    // Save the received frame to a file (or process in memory)
    const inputPath = './uploads/frame.jpg';
    fs.writeFileSync(inputPath, frameBuffer);

    // Define the output directory where OpenPose will save the results
    const outputDirectory = './output/';
    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory);
    }

    // Run OpenPose to process the frame
    const openPoseCmd = `./openpose/bin/openpose.bin --image_dir ${inputPath} --output_directory ${outputDirectory}`;

    exec(openPoseCmd, (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.status(500).send('Error processing frame');
        }

        // The processed image is saved in the output directory, send back the result
        const resultImagePath = path.join(outputDirectory, 'frame_1_keypoints.jpg');
        res.sendFile(resultImagePath);
    });
});











module.exports = router;