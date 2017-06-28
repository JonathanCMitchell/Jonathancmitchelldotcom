import './Resume.css'
import React from 'react'
import Divider from 'material-ui/Divider'

const Resume = () => {
  return (
    <div className = "text-center">
    <h2>CV/ Resume</h2>
      <Divider/>
      <div className="Resume-Skills">
      <Divider/>
        <h5 className='text-center'>Technical Skills</h5>
        <Divider/>
        <ul>
          <li><strong>Science: </strong>MATLAB • Arduino/RaspberryPi/Tiva • Solidworks • C • C++ • Python • NumPy • SciPy • TensorFlow</li>
          <li>Keras • OpenCV • Pandas • Scikit-learn • Sklearn • Labview • HFSS • FPGA • Ipython/Jupyter notebooks • PLCs</li>
          <li><strong>Full-Stack: </strong>  JavaScript (jQuery, Angular, React, Redux, Backbone, ES6, ES7) • HTML5/CSS3 • Angular • Sass</li>
          <li>MySql • NodeJS • MongoDB • KnexJS • Grunt • Gulp • Babel • Heroku • Git • Webpack • TDD/Mocha/Jasmine</li>
        </ul>
      </div>
      <div className = "text-center Resume-Projects">
        <Divider/>
        <h5>Projects</h5>
        <Divider/>
        <ul>
          <li list-style="none"><strong>Vehicle and Lane Line Detection</strong> 
          <a href="https://github.com/JonathanCMitchell/Vehicle-Detection">Vehicle Git  </a>
          <a href="https://github.com/JonathanCMitchell/Advanced-Lane-Line-Detection">Lane Line Git  </a>
          <a href="https://github.com/JonathanCMitchell/ObjectDetector">Combined Git</a> 2017
          </li>
          <li list-style="none">
            Detects vehicles and lane lines from a video stream using a support vector machine and computer vision techniques
          </li>
          <li>Designed cell-based window search method to extract image features and predict vehicle locations</li>
          <li>Implemented adaptive color thresholds, filtering, windowing, and morphological operations to detect lane lines</li>
        </ul>
        <Divider/>
        <ul>
          <li list-style="none">Speed Estimation</li>
        </ul>
      </div>
    </div>

    )
};

export default Resume