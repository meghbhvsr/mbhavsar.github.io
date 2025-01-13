import React from 'react';
import '../Styling/blog.css';

const Blog = () => (
    <div className="background">
        <div class="text2-container">
            <div className='text2'>
                <h1>My Google Rejection Story</h1>
                <p>Hi, I recently went through the entire Software Engineering recruitment process at Google, I made it all the way to the hiring committee.
                    Although I did not pass, I learned alot and wanted to share my learnings, process and tips. I believe that we can learn more from failure than we ever can from success.
                </p>
                <h2>Resume Screening</h2>
                <p>I applied at the end of july in 2024 and did not hear back until september, be patient, it can take a while for recruiters to reach out, 
                    sometimes they dont reach out until their window for accpeting application closes. You can always check your status on google careers page to see if you are still in the pipeline.
                    Make sure to cater your resume towards the position you are applying for and be patient.
                </p>
                <h2>Google Online Assessment</h2>
                <p>In september after the long weekend, I had finnaly heard back from Google, and they invited me to do a online coding assessment and a personality test, 
                    this assessment consisted of 2 leetcode style problems that I had a hour and a half to finish. Along with a personality test, which was not too bad. </p>
                <h2>Phone Screen</h2>
                <p> I must have done really well on the online assessment, as they decided to skip me past the phone screen, stright to the on-site!</p>
                <h2>On-Site</h2>
                <p>They let me book when I wanted to do the on-site along with what programming language I wanted to do it in, so I went with python and decided that a month should be enough time to prepare. 
                So for a month straight I did as many leetcode problems as I could, did the blind 75, NeetCode was a big help during this process, his videos are very informational and goes through each problem very well. 
                I also did random problems that show up as Google tagged questions on LeetCode. I was scheduled for 4 interviews in 1 day,
                    one was the googlyness round (behvaioural interview), while there were 3 more technical interviews that would follow it. Each interview is 45 minutes, and a 15 minute break after each interview,
                    however there was a hour and 15 minute break after the second interview.
                </p>
                <h2>Googlyness Round</h2>
                <p>This round went really well, it was a regular behavioural interview, they are basically trying to see if you would be a culture fit at google. 
                    Questions were based around team chemistry and dealing with conflicts, etc.
                </p>
                <h2>Technical Interview 1</h2>
                <p>This round also went really well, the question involved using a variation of binary search, along with a harder follow up, that
                    also involved using a variation of binary search. I was able to code up the first question, and was able to fully explain the follow up.
                </p>
                <h2>Halftime</h2>
                <p>Coming out of the first 2 interviews, I felt really good, took a little break, ate some light food and got ready for my next interviews</p>
                <h2>Technical Interview 2</h2>
                <p>This round involved iterating through a trie like structure and decoding a message. This round went good, I was able to get the solution to the given problem.
                    However, I failed to clarify some parts of the problem such as what to do for invalid cases. I thought I finished quicker and realized i forgot to implement
                    some parts of my code that I had talked about. What I learned is to never rush the coding part, make sure to read it over multiple times and make sure you 
                    have everything you need.
                </p>
                <h2>Technical Interview 3</h2>
                <p>This was my worst interview. The question invloved stacking the max amount of boxes on top of each other. At the start I forgot to go through all of the topics I knew,
                    and got stuck on dp, and a brute force way invloving for loops. This took about half of my interview time, until the interviewer gave me a hint,
                    and then I realized that backtracking was the way to solve the problem. I was almost able to complete the problem, but I ended up running out of time. 
                </p>
                <h2>Learnings</h2>
                <p>Overall, I learned alot from this experience. Dont feel too good after 2 great interviews, you need atleast another great interview to have a good chance to pass
                    the hiring committee. Make sure to always go over all the various algorithms and data structures that you could apply to a question, go over them and make a calculated decision.
                    Always make sure to ask about any confusions, possible edge cases, exactly what the interviewer is looking for in the question before you start coding the solution. Thank you for reading
                    and I hope this helps in your own endeavours at Google.
                </p>
            </div>
        </div>
    </div>
  );
  
  export default Blog;