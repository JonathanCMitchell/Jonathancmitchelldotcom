import './Resume.css'
import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

// Note: Do not include links, they can click on your projects tab to see projects in detail
// TODO: Add project dates
const Resume = () => {
  return (
    <div className = "text-left">

    <h2 className = 'text-center'>CV/ Resume</h2>
      <Divider/>
      <Paper className="col-md-6 col-md-offset-3">
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
      <div className = "text-left Resume-Projects">
        <Divider/>
        <h5 className = 'text-center'>Projects</h5>
        <Divider/>
        <ul>
          <li list-style="none"><strong>Vehicle and Lane Line Detection</strong></li>
          <li list-style="none">
            <i>Detects vehicles and lane lines from a video stream using a support vector machine and computer vision techniques</i>
          </li>
          <li>• Designed cell-based window search method to extract image features and predict vehicle locations</li>
          <li>• Implemented adaptive color thresholds, filtering, windowing, and morphological operations to detect lane lines</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Speed Estimation</strong></li>
          <li list-style="none"><i>Neural network dashboard cam speed estimator for autonomous vehicles trained on 8616 images extracted from a video</i></li>
          <li>• Utilized dense optical flow analysis and architected conv-net processing pipeline to achieve MSE of ~5.6</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Behavioral Cloning</strong></li>
          <li><i>Trained a model to simulate a self-driving car by predicting steering angles while driving in a unity simulation</i></li>
          <li>• Normalized a multi-modal data distribution by performing data augmentation and creation</li>
          <li>• Created a creative preprocessing pipeline with brightness augmentation, vertical flipping, resizing and cropping</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Traffic Sign Classification</strong></li>
          <li list-style="none"><i>Classify Traffic Signs from more than 40 classes in a German Traffic Sign Dataset of 50,000 32x32 images</i></li>
          <li>• Implemented a LeNet-like CNN using Google’s TensorFlow deep learning framework</li>
          <li>• Utilized normalization, data creation, regularization methods to increase accuracy to ~ 94.5% at test using TensorFlow</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Game Review API</strong></li>
          <li list-style="none"><i>A restful API that allows users to search through 18k game reviews and query for top scores by genre, platform, title etc</i></li>
          <li>• Parsed game review data from ign.com and filled MySql database tables using an MVC file pattern</li>
          <li>• Designed ES7 generator functions to synchronously seed the database with 18k row entries</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Omakase</strong></li>
          <li list-style="none"><i>A location-based food ranking application, (“Yelp for a single dish item”)</i></li>
          <li>• Product manager for a team of 4, taught git workflow to team members, validated all commits and pull requests</li>
          <li>• Designed relational database schema in SQL to accomplish MVP and authentication features</li>
          <li>• Implemented models to read/write data to and from a MySql database using an Object-relational mapping tool</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Reddit Search</strong></li>
          <li list-style="none"><i>A one-column UI-friendly Reddit search interface that allows users to filter live search results</i></li>
          <li>• Implemented models to read/write data to and from a MySql database using an Object-relational mapping tool</li>
        </ul>
        <ul>
          <li list-style="none"><strong>Radar Sensor</strong></li>
          <li list-style="none"><i>24 Ghz Radar sensor to detect real time speed and range measurement</i></li>
          <li>• Programmed a micro-processor to control a patch antenna array and transmit signals to antenna transceiver</li>
        </ul>
      </div>
      <div className="Resume-Experience">
      <Divider/>
      <h5 className = 'text-center'>Work Experience</h5>
      <Divider/>
        <ul>
        <li list-style="none"><strong></strong></li>
        <li list-style="none"><strong></strong></li>
        <li></li>
        <li></li>
        </ul>
        
        <ul>
          <li list-style="none"><strong>Computer Vision Researcher</strong></li>
          <li list-style="none"><strong>USC Media and Communications Lab</strong></li>
          <li>• Focus on unsupervised and semi-supervised learning, object segmentation and convolutional network design</li>
          <li>• Research under prof Jay Kuo.</li>
        </ul>


        <ul>
        <li list-style="none"><strong>Software Engineer</strong></li>
        <li list-style="none"><strong>Astra</strong></li>
        <li>• Implement bug fixes, unit testing, feature development in react and assist with time series analysis algorithms</li>
        </ul>

        <ul>
        <li list-style="none"><strong>Founder</strong></li>
        <li list-style="none"><a href="https://www.meetup.com/Los-Angeles-Self-Driving-Car-Meetup/"><strong>Self-Driving Cars Los Angeles</strong></a></li>
        <li>• Prepare and present lectures on Machine Learning, Computer Vision and Image processing to 190 members</li>
        </ul>


        <ul>
        <li list-style="none"><strong>Technical Mentor</strong></li>
        <li list-style="none"><strong>Udacity</strong></li>
        <li>• Technical mentor providing support to 17 students in Udacity’s Self-Driving Car Nanodegree program</li>
        <li>• Provide technical support and guidance on a variety of Computer Vision/ Machine Learning topics including
Classification, Image Processing, Artificial and Convolutional Neural Network implementation, and perception</li>
        </ul>

        <ul>
        <li list-style="none"><strong>Automation Engineering Intern</strong></li>
        <li list-style="none"><strong>Genentech, Oceanside, CA</strong></li>
        <li>• Increased batch checking precision and efficiency through improving gas chromatography review tools</li>
        <li>• Implemented SQL queries and commands to automatically render graphical data for fast validation</li>
        </ul>

        <ul>
          <li list-style="none"><strong>Software Development Engineering Intern</strong></li>
          <li list-style="none"><strong>inSightec</strong></li>
          <li>• Created algorithms that contributed towards Parkinson’s tremor’s cure through designing a feedback control
   system that monitors an MRI-guided focused-ultrasound wave during a neurosurgical procedur </li>
          <li>• Designed control system for real-time simulation of musculoskeletal responses in MATLAB</li>
        </ul>
        <ul>
        <li list-style="none"><strong>Student Body Senator</strong></li>
        <li list-style="none"><strong>Associated Students of University of California Davis</strong></li>
        <li>• Co-managed an annual 11.8M budget and oversaw 26 student-run businesses on campus </li>
        </ul>
      </div>

      <div className="Resume-Education">
      <Divider />
      <h5 className="text-center">Education</h5>
      <Divider />
      <ul list-style="none">
        <li><strong>Udacity Self-Driving Car Nanodegree: </strong>Computer Vision and Deep Learning, 2017</li>
        <li><strong>Hack Reactor: </strong> Advanced Software Engineering Immersive, 2016</li>
        <li><strong>University of Califiornia Davis: </strong>Electrical Engineering, 2015</li>
        <li>Specialized in Digital and Analog Signal Processing, Control Systems, Antenna design</li>
        <li>Deans list 2014, 2015</li>
      </ul>  
      </div>
      </Paper>
    </div>

    )
};

export default Resume