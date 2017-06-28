import './Resume.css'
import React from 'react'
import Divider from 'material-ui/Divider'
// Note: Do not include links, they can click on your projects tab to see projects in detail
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
          <li list-style="none"><strong>Vehicle and Lane Line Detection</strong></li>
          <li list-style="none">
            Detects vehicles and lane lines from a video stream using a support vector machine and computer vision techniques
          </li>
          <li>• Designed cell-based window search method to extract image features and predict vehicle locations</li>
          <li>• Implemented adaptive color thresholds, filtering, windowing, and morphological operations to detect lane lines</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Speed Estimation</strong></li>
          <li list-style="none">Neural network dashboard cam speed estimator for autonomous vehicles trained on 8616 images extracted from a video</li>
          <li>• Utilized dense optical flow analysis and architected conv-net processing pipeline to achieve MSE of ~5.6</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Behavioral Cloning</strong></li>
          <li>Trained a model to simulate a self-driving car by predicting steering angles while driving in a unity simulation</li>
          <li>• Normalized a multi-modal data distribution by performing data augmentation and creation</li>
          <li>• Created a creative preprocessing pipeline with brightness augmentation, vertical flipping, resizing and cropping</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Traffic Sign Classification</strong></li>
          <li list-style="none">Classify Traffic Signs from more than 40 classes in a German Traffic Sign Dataset of 50,000 32x32 images</li>
          <li>• Implemented a LeNet-like CNN using Google’s TensorFlow deep learning framework</li>
          <li>• Utilized normalization, data creation, regularization methods to increase accuracy to ~ 94.5% at test using TensorFlow</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Game Review API</strong></li>
          <li list-style="none">A restful API that allows users to search through 18k game reviews and query for top scores by genre, platform, title etc.</li>
          <li>• Parsed game review data from ign.com and filled MySql database tables using an MVC file pattern</li>
          <li>• Designed ES7 generator functions to synchronously seed the database with 18k row entries</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Omakase</strong></li>
          <li list-style="none">A location-based food ranking application, (“Yelp for a single dish item”)</li>
          <li>• Product manager for a team of 4, taught git workflow to team members, validated all commits and pull requests</li>
          <li>• Designed relational database schema in SQL to accomplish MVP and authentication features</li>
          <li>• Implemented models to read/write data to and from a MySql database using an Object-relational mapping tool</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Reddit Search</strong></li>
          <li list-style="none">A one-column UI-friendly Reddit search interface that allows users to filter live search results</li>
          <li>• Implemented models to read/write data to and from a MySql database using an Object-relational mapping tool</li>
        </ul>

      </div>
    </div>

    )
};

export default Resume