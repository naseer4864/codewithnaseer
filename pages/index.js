import Head from 'next/head'
import SimpleSlider from '../components/Slider';
import styles from '../styles/Home.module.css';
// import { motion, useAnimation} from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { useEffect } from 'react'

// const Square ={
//   visible:{x:0, transition:{duration:1,type:"spring"}},
//   hidden:{x:100}
// }



export default function Home() {

  // const animation=useAnimation();
  // const {ref, inView}=useInView({threshold:0.2})
  // useEffect(()=>{
  //   if(inView){
  //     animation.start("visible")
  //   }
  //   if(!inView){
  //     animation.start("hidden")
  //   }
  //   console.log("use effect hook, inView =", inView)
  // },[inView,animation])
  return (
    <div className={styles.home}>
      <div className={styles.sub}>
        <div className={styles.tech}>
      <h2>TECH</h2>
      <p>If not having a degree has held you back
         from pursuing a career in technology, you
          should know that most tech positions
           simply require proof that you can do
            the job, through certifications and
             prior experience. Hiring managers don't
              weed out potential job candidates
             because they don't have undergraduate degrees.
             Technology is everywhere. Whether you realize
              it or not, technology is used in almost every
               industry and plays a role in the way we live,
                work and communicate.</p>
        </div>
      </div>
        <div className='home-slider'>
          <SimpleSlider/>
        </div>
        <div className={styles.banner}>
          <h2>BENEFIT OF LEARNING PROGRAMING LANGUAGES</h2>
          <div className={styles.bx1}>
            <div className={styles.inner}>
              <div className={styles.p1}>
              <h2>CODERS ARE IN HIGH DEMAND</h2>
              <p>We live in the most unprecedented times of our lives,
                 and learning to code will improve your child’s chances
                of a lucrative STEM career. Artificial
                intelligence (AI) and computing jobs are 
                   growing at a tremendous pace, twice the national
                    average, to be precise. Coders are in high demand
                     and have become a vital skill, and graduates with
                      CS majors can earn 40% more compared to the
                       college graduate average.</p>
              </div>
              <div className={styles.p1}>
                <h2>CODING GIVES YOU A COMPETITIVE ADVANTAGE</h2>
                <p>If you want to be more desirable in the eyes of
                   admission officers and your future employers,
                    start learning to code. This is one hot skill
                     many of your peers’ lack and will give you the
                      much-desired competitive edge when applying
                       for jobs. Plain
                        and simple.</p>
              </div>
            </div>
          </div>
          <div className={styles.bx2}>
            <div className={styles.inner2}>
              <div className={styles.p2}>
                <h2>CODING IMPROVES PROBLEM-SOLVING</h2>
                <p>Coding required tackling complex problems
                   and breaking them down into smaller parts
                    for analysis. This helps kids and teens to
                     learn and understand how to approach various
                      challenges and problems using logic and
                       computational thinking. This logical
                        thinking is powerful and will help you a lot
                         in school, work, and life.</p>
              </div>
              <div className={styles.p2}>
                <h2>FINAL TTHOUGHT</h2>
                <p>As Bill Gates once said, “Learning to write programs
                   stretches your mind, and helps you think better,
                    creates a way of thinking about things that I think
                     is helpful in all domains.” I believe parents and
                      schools around the world are very eager to teach
                       their kids how to code. Of course, learning how
                        to code won’t necessary turn them into professional
                         programmers and one day maybe even be billionaires
                          like Bill Gates; However, it indeed teaches them
                           much needed skills that will help them in a variety
                            of academic and life choices in today’s
                             hyper-competitive digital era.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.end}>
          <div className={styles.last}>
            <div className={styles.pic}></div>
          <p>Computer programming can be a very rewarding
             career both intellectually and financially.
              Programmers need to be willing to learn new
               things and solve complex problems. There are
                many different fields of programming to explore
                 like Web, mobile, game development or systems
                  engineer.Computer programming is a skill that more Nigerians
                   need to learn. At a time when our country is
                    suffering from unemployment, whether you want to
                     be an entrepreneur and start a business, or you’re
                      just worried about having a job when you graduate,
                       learning basic computer programming is the
                        best way to do either.</p>
          </div>
        </div>
    </div>
  )
}
