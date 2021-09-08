import React from 'react';
import styled from 'styled-components';
import {FramerTreeLayoutContext, motion} from 'framer-motion';
import PicOne from '../img/pic1.svg';
import PicTwo from '../img/pic2.svg';
import PicThree from '../img/pic3.svg';
import { Children } from 'react';


const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    background: #131313;
`;

   

const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem cacl((100vw -1300px)/2);

    @media screen and (max-width:760px){
        grid-template-column:1fr;
    }
`;

const ColumnLeft = styled.div`
    display:flex;
    color:white;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding: 5rem 2rem;

    h1{
        margin-bottom:0.5rem;
        font-size: 2rem;
    }
    p{
        margin-bottom:0.5rem;
        font-size:4rem;
    }
    

`;
const Button = styled(motion.button)`
    padding: 1rem 2rem;
    font-size: 2rem;
    border: 2px solid white;
    border-radius: 4px;
    outline: none;
    cursor:pointer;
    background: transparent;
    color: white;
`;
const Image = styled(motion.img)`
    postion: absolute;
    width:100%;
    height:100%;
    max-width:250px;
    max-height:250px;
`;
const ColumnRight = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 2rem;
    position: relative;

    $(Image): nth-Children(1){
        top:10px;
        right:10px;
    }
    $(Image): ntn-child(2){
        top:350px;
        right:10px;

    }
    $(Image): ntn-child(3){
        top: 350px;
        left:50px;
    }
`;

const Hello = () => {
const fadeLeft={
    hidden:{opacity: 0, x: -100},
    visible:{opacity: 1, x:0}
}
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        iniitial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}

                    >Welcome to Space</motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{duration:1}}

                    >Journey to use the unknown</motion.p>
                    <Button
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95, backgroundColor: '#67f6E7', border:'none', color: '#000'}}
                    initial={{opacity:0}}
                    animate={{opacity:1, transition:{duration:1.5}}}
                    
                    >Get started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={PicOne} alt='pic' 
                        whileTap={{scale:0.9}}
                        drag={true}
                        dragConstraints={{left:0, right:250, top:0, bottom:50}}
                        initial={{opacity:0, y:-100}}
                        animate={{opacity:1, y:0, transition:{duration:1}}}
                    />
                    <Image src={PicTwo} alt='pic' 
                        whileTap={{scale:0.9}}
                        drag={true}
                        dragConstraints={{left:10, right: 250, top:0, bottom:100}}
                        initial={{opacity:0, x:100}}
                        animate={{opacity:1, x:0, transition:{duration:1}}}
                        />
                    <Image src={PicThree} alt='pic' 
                         whileTap={{scale:0.9}}
                         drag={true}
                         dragConstraints={{left:10, right: 250, top:0, bottom:100}}
                         initial={{opacity:0, y:100}}
                         animate={{opacity:1, y:0, transition:{duration:1}}}/>
                </ColumnRight>

            </Container>
        </Section>
    );
};

export default Hello;
