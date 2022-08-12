import logo from "./image1.png";
import "./App.css";
function App() {
  return (
    <div>
      <div className="centeredBlock">
        <h1>Rohan Tyagi</h1>
        <img src={logo} className="centeredImage"></img>
        <br></br>
        <p>
          Throughout my years at <b>Enloe High School</b> I have gained
          experience in many subjects. At the moment, I aim to double-major in{" "}
          <b>Mechanical Engineering</b> and <b>Computer Science</b>. I enjoy
          creating and building working projects as well as programming tasks to
          automate them.
        </p>
        <h2>Experience:</h2>
        <div className="exText">
          <p className="exTitle">
            RoboEagles Member | RoboEagles Board Member
            <span className="exTime">(November 2021 - Current)</span>
          </p>

          <small className="exDesc">
            Our team (Team #4828) competed in District and Statewide FIRST
            Robotics Competitions (FRC) in North Carolina. I participated in the
            team's mechanical, business, and media team where I mainly worked on
            keeping the web page up-to-date and getting the team grants and
            sponsorships. Our team won the Entrepreneurship Award for the North
            Carolina district for the 2021-22 season. I was elected to be part
            of the team's Student Board in June 2022.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            Scientail Inc. President
            <span className="exTime">(December 2021 - Current)</span>
          </p>

          <small className="exDesc">
            I spearheaded the execution of a nonprofit that aims to provide
            hands-on activities to students interested in the STEM field in
            North Carolina. Scientail continues to participate in community
            efforts to increase availability of the STEM field by working with
            hospitals to send "Experiment in a Box" experiments to children in
            the hospitals. Scientail also works with elementary school teachers
            to aid with curriculum-based activities for students to better
            understand important STEM subjects.My role in the nonprofit included
            overseeing the execution of these efforts as well as building and
            maintaining the website in HTML, CSS, and JS.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            Science Olympiad JV Team Member
            <span className="exTime">(September 2021 - Current)</span>
          </p>

          <small className="exDesc">
            I was part of the JV2 team at Enloe and competed at multiple events.
            Competed at local and state-wide competitions for <i>Bridges</i>,
            <i> It's About Time</i>, <i> Gravity Vehicles</i>,{" "}
            <i> Digital Structures</i>, and <i> Run It Code It</i>.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            American Computer Science League Finalist
            <span className="exTime">(May 2022)</span>
          </p>

          <small className="exDesc">
            I qualified for the 2022 ACSL Finals Competition in which I
            programmed in Java.
          </small>
        </div>
        <h2>Projects:</h2>
        <div className="exText">
          <p className="exTitle">
            Green Light
            <span className="exTime">(January 2022 - March 2022)</span>
          </p>

          <small className="exDesc">
            I worked in a group of 4 to create an Android app for Ready Set App,
            a Lenovo app-developement competition. We made an app that would aid
            teen drivers track hours, improve driving skills, and notify
            authorities in cases of accident or unresponsive drivers. I applied
            math and computer science concepts I learned in school by using
            various formulas (ie. distance formula) and using basic programming
            knowledge (ie. for/while loops) to build efficient code for the app.
          </small>
          <p className="noText"></p>
          <a
            href="https://devpost.com/software/green-light-t8aois"
            target="_blank"
          >
            <button className="btn">
              <small>View Project</small>
            </button>
          </a>
        </div>
        <div className="exText">
          <p className="exTitle">
            Scientail Website
            <span className="exTime">(December 2021 - March 2022)</span>
          </p>

          <small className="exDesc">
            This site was my first exposure to HTML, CSS, and JS coding. I
            worked on coding the site along with 2 other people. Most of my time
            was spent on formatting the specific blog pages and the main{" "}
            <a href="https://www.scientail.org/blog">scientail.org/blog</a>{" "}
            page. I also learned site best practices to reduce website load
            time.
          </small>
          <p className="noText"></p>
          <a href="https://scientail.org" target="_blank">
            <button className="btn">
              <small>View Project</small>
            </button>
          </a>
        </div>
        <div className="exText">
          <p className="exTitle">
            This Portfolio Website
            <span className="exTime">(August 2022 - Current)</span>
          </p>

          <small className="exDesc">
            This protfolio website is my first project with React JS framework.
            I learned how to code in React JS and the fundamentals of how React
            JS is structured.
          </small>
        </div>
        <h2>Volunteering:</h2>
        <div className="exText">
          <p className="exTitle">
            Key Club
            <span className="exTime">(December 2021 - Current)</span>
          </p>
          <small className="exDesc">
            Completed 53 hours of community service through Key Club at Enloe
            High School as a general member.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            RoboEagles Outreach
            <span className="exTime">(January 2022 - Current)</span>
          </p>
          <small className="exDesc">
            Outreach performed by the RoboEagles team is aimed towards
            elementary and middle schoolers to improve inclusivity in
            STEM-related fields. I worked in the team to enhance STEM education
            through hard work, dedication, and fun as well as promote science,
            technology, and teamwork throughout the community.
          </small>
        </div>
        <h2>Skills:</h2>
        <div className="row">
          <div className="column3">
            <div className="exText">
              <p className="exTitle">• HTMl, CSS, JS</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Java</p>
            </div>
          </div>
          <div className="column3">
            <div className="exText">
              <p className="exTitle">• Leadership</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Robotics</p>
            </div>
          </div>
          <div className="column3">
            <div className="exText">
              <p className="exTitle">• Project Management</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Spanish (Limited Working Proficiency)</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <center>
          <a href="mailto:rohan.x.tyagi@gmail.com">
            <button className="btn1">Email</button>
          </a>
          <a href="https://www.linkedin.com/in/rohan-tyagi-/" target="_blank">
            <button className="btn1">LinkedIn</button>
          </a>
        </center>
      </div>
    </div>
  );
}

export default App;
