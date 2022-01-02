import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../custom-button/custom-button';
import { useInView } from 'react-intersection-observer';
import {
  Container, ContactWrapper, ContactTitle, InputWrapper, InputLabel, InputField, ThankWrapper, Flex, MsgInput, Back, Back2, ThankText, IconWrapper, EmailText, CopyRight
} from './contact.style';

const Contact = React.forwardRef((props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <Container data-scroll-section data-scroll-speed={-7} ref={ref} id="contact">
      <ThankWrapper>
        <ThankText>Thank You for visiting!</ThankText>
        <Flex jus="center">
          <IconWrapper target="_blank" href="https://github.com/AnhMHNguyen" rel="noopener noreferrer">
            <Image src="/static/github.svg" alt="github" width={100} height={100} />
          </IconWrapper>    
          <IconWrapper target="_blank" href="https://www.linkedin.com/in/anne-nguyen-b585b9222/" rel="noopener noreferrer">
            <Image src="/static/linkedin.svg" alt="linkedin" width={100} height={100} />
          </IconWrapper>
        </Flex>
        <EmailText>Email: anhmh.nguyen01@gmail.com</EmailText>
        <Flex jus="space-between">
          <CopyRight>@2021 Kate Nguyen</CopyRight>
          <Link href="/?section=introduction" as='/' passHref scroll={false}>   
            <Back2>Back To Top</Back2>
          </Link>
        </Flex>
      </ThankWrapper>
      <ContactWrapper>
        <ContactTitle>
          Contact Me
        </ContactTitle>
        <Flex>
          <InputWrapper>
              <InputField width="100%" type="text" value={name} placeholder=' ' onChange={(e) => setName(e.target.value)}/>
              <InputLabel>Name</InputLabel>
          </InputWrapper>
          <InputWrapper>
            <InputField width="21vw" type="text" value={email} placeholder=' ' onChange={(e) => setEmail(e.target.value)}/>
            <InputLabel>Email</InputLabel>
          </InputWrapper>
        </Flex>
        <InputWrapper>
          <InputField type="text" value={subject} placeholder=' ' onChange={(e) => setSubject(e.target.value)}/>
          <InputLabel>Subject</InputLabel>
        </InputWrapper>
        <MsgInput value={msg} placeholder="Message" onChange={(e) => setMsg(e.target.value)} rows="5"/>
        <CustomButton primary>Submit</CustomButton>
        <Link href="/?section=introduction" as='/' passHref scroll={false}>       
          <Back>Back To Top</Back>
        </Link>
      </ContactWrapper>
    </Container>
  );
})

export default Contact;