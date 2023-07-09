import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[1-3]$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };


  return (

    <div class="main">
    <div class="all">
        <div class="form">
            <div class="head">
                <h1>1) Do you have difficulty in carrying out your day to day activities as started below?</h1>
                Score according to the following coding pattern<br/>
                1 = Totally Dependent;<br/>
                2 = Partially Dependent;<br/>
                3 = Independent;<br/></div><br/>
                <form onSubmit={handleSubmit}>
                    
                    <p class="classy">
                        <label>a) Taking Food</label><br/></p>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>
                      
                        <div class="mass">
                            <label>b) Dressing </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>c) Toilet/Bathroom </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>d) Cooking/normal housework </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>e) Shopping for day to day needs</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>f) Using Telephone </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>g) Managing Finances </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>h) Travelling </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>i) Taking your medicines</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>
                </form>
            </div>
          
        <div class="form">
            <div class="head">
                <h1>2) Do you have any trouble in doing the following?</h1>
                Score according to the following coding pattern<br/>
                1 = Quite a lot;<br/>
                2 = A little;<br/>
                3 = Not at all;<br/></div><br/>
                <form onSubmit={handleSubmit}>
                    <p class="classy">
                        <label>a) Taking a long walk (1KM)</label><br/></p>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>
                      
                        <div class="mass">
                            <label>b) Taking a short walk (about 500 m)</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>c) Ascending /descending stairs</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>d) Bending/Kneeling?Stooping </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>

          <div class="form">
            <div class="head">
                <h1>3) Which of the following best describes your present functional status?</h1>
                Score as mentioned in the options below<br/>
                1 = Totally dependent and bed bound;<br/>
                2 = Able to manage my day-to-day activities with help;<br/>
                3 = Not as active as before but able to manage my day-to-day activites;<br/></div><br/>
                <form onSubmit={handleSubmit}>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>

                </form>
            </div>

          <div class="form">
            <div class="head">
                <h1>4) The next few questions are regarding your feelings and mood during the last 2 weeks.</h1>
                Please give the answer that comes to your mind<br/>
                0 = Quite Frequently;<br/>
                1 = Occasionally ;<br/>
                2 = Not at all;<br/></div><br/>
                <form onSubmit={handleSubmit}>
                    <p class="classy">
                        <label>a) Have you been feeling depressed/low most of the time?</label><br/></p>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>
                      
                        <div class="mass">
                            <label>b) Having little interest in doing things that you used to enjoy before?</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>c) Have negative feelings most of the time?<br/>(For e.g. somthing bad is going to happen to me)</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>d) Do you feel fatigued in your day to day activities </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>f) Do you often feel helpless?</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>g)  How much effect does sleep irregularities have on your day to day life? </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>
          
          <div class="form">
            <div class="head">
                <h1>4) The next few questions are regarding your feelings and mood during the last 2 weeks.</h1>
                Please give the answer that comes to your mind<br/>
                0 = Quite Frequently;<br/>
                1 = Occasionally ;<br/>
                2 = Not at all;<br/></div><br/>
                <form onSubmit={handleSubmit}>
                    <p class="classy">
                        <label>a) Have you been feeling depressed/low most of the time?</label><br/></p>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>
                      
                        <div class="mass">
                            <label>b) Having little interest in doing things that you used to enjoy before?</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>c) Have negative feelings most of the time?<br/>(For e.g. somthing bad is going to happen to me)</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>d) Do you feel fatigued in your day to day activities </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>f) Do you often feel helpless?</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>g)  How much effect does sleep irregularities have on your day to day life? </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>

          <div class="form">
            <div class="head">
                <h1>6) The next few questions are reagarding your appetite and nutrition</h1><br/></div><br/>
                <form onSubmit={handleSubmit}>
                    <p class="classy">
                        <label>a) Taking a long walk (1KM)<br/>
                        Score according to the following coding pattern:<br/>
                        1 = Very Poor; <br/>
                        2 = Poor; <br/>
                        3 = Moderate; <br/>
                        4 = No Change;
                        </label><br/></p>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>
                      
                        <div class="mass">
                            <label>b) Having you lost or gained weight in the last 3 months?
                              <br/>1 = Quite a lot(More than 5 kg)
                              <br/>2 = Moderate Change-(3-5 kg);
                              <br/>3 = Not significantly (1-3 kg);
                              <br/>4 = Same as before less than 1kg;
                              </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>c) Anthropometry :- Body mass index (BMI in Kg/m2)
                              <br/>Score according to the following coding pattern
                              </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>

          <div class="form">
            <div class="head">
                <h1>7) Do you suffer from any major diseases other than your present ailment?</h1><br/></div><br/>
                <form onSubmit={handleSubmit}>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>
                      
                        <div class="mass">
                            <label>If yes above, how much effect do they have on your day-to-day living?
                              <br/>If no disease present, score - 3
                              <br/>Score according to the following coding pattern
                              <br/>0 = very much
                              <br/>1 = A little
                              <br/>2 = Not at all 
                              <br/>3 = No disease
                              </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>

          <div class="form">
            <div class="head">
                <h1>8) Do you suffer from any of the under mentioned age - related conditions?</h1><br/></div><br/>
                <form onSubmit={handleSubmit}>
                        <input type="radio" name="Class" class="choice"/><span>Incontinence</span><br/>
                        <input type="radio" name="Class" class="choice"/><span>Memory Loss</span><br/>
                        <input type="radio" name="Class" class="choice"/><span>Loss of Sight</span><br/>
                        <input type="radio" name="Class" class="choice"/><span>Loss of hearing</span><br/>
                        <input type="radio" name="Class" class="choice"/><span>Any other</span><br/>
                        <br/>
                      
                        <div class="mass">
                            <label>If yes, how much does it interfere with your day-to-day activities?
                              <br/>Score 3, if no condition present
                              <br/>0 = Very much;
                              <br/>1 = A little;
                              <br/>2 = Not at all;
                              <br/>3 = No Condition
                              </label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>

            <div class="form">
            <div class="head">
                <h1>9) On an average, how many medicines do you take?</h1><br/></div><br/>
                <form onSubmit={handleSubmit}>
                    <div class="mass">
                      <label>
                        <br/>1 = above 5;
                        <br/>2 = 5 or less;
                      </label><br/>
                    </div> 
                    <br/>
                    <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>

            <div class="form">
            <div class="head">
                <h1>11) Do you have any trouble in doing the following?</h1>
                Score according to the following coding pattern<br/>
                1 = Very much;<br/>
                2 = Quite a bit;<br/>
                3 = A little;<br/>
                4 = Not at all;<br/></div><br/>
                <form onSubmit={handleSubmit}>
                    <p class="classy">
                        <label>a) Does your present health condition put some strain on your financial status?</label><br/></p>
                        <input type="text" name="Student's Name" placeholder="Enter your Full Name" class="sass" /><br/><br/>
                      
                        <div class="mass">
                            <label>b) Does your health condition permit you to get some time to relax and follow some activity you like?</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                        <div class="mass">
                            <label>c) Can you depend on your family /friends /relatives for help and support at times of crisis?</label><br/>
                        </div> 
                        <br/>
                        <input type="number" name="Student's Name" placeholder="1-3" class="sass" /><br/><br/>

                </form>
            </div>

        </div>
        <footer>
            
        </footer>
    </div>
  );
}


export default App;
