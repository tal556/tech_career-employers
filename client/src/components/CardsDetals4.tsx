import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import Title from "./Title";
import "./";

function CardsDetals4() {
  return (
    <Container>
      <Title title="Full-Stack developer" />
      <TopSection>
        <div>
          <div>
            <span>Ebay</span>
            <span> -Tel Aviv</span>
          </div>
          <div>
            <span>active</span>
            <span> -applicants 41</span>
          </div>
          <div>last date to apply : 23/4/2021</div>
        </div>

        <Button type="primary">apply job</Button>
      </TopSection>

      <SecondSection>
        <TherdSection>
          <p className="jobDescription">
            With more than a billion active listings, tens of millions of daily
            transactions, conducted by tens of millions of sellers / hundreds of
            millions of buyers, across more than 30 countries, and 22 different
            currencies, comprised of a product catalog staggering in diversity -
            eBay is a marketplace like no other that has ever existed If you’re
            interested in joining a purpose driven community that is dedicated
            to creating an ambitious and inclusive workplace, join eBay – a
            company you can be proud to be a part of.
            <br />
            In this role you will be a part of eBay’s global Seller Insights
            group in support of dramatically elevating the capabilities of all
            of eBay’s Selling. Ensuring eBay’s tens of millions of sellers have
            access to world class, supremely intelligent tools, analytics and
            API’s to support their needs to operate and grow.
          </p>
          <p>
            As a Full Stack Engineer, you will work on both the frontend and
            backend of our STUDIO platform and other large scale systems we are
            building for pathology.
          </p>
        </TherdSection>
        <div>
          <h4>Minimum Qualifications:</h4>
          <ul>
            <li>4+ years of hands-on knowledge of Java application development, testing and frameworks (Spring Boot)</li>
            <li>
              {" "}
              Hands-on experience with HTML5, CSS3, JavaScript, Typescript.
            </li>
            <li>Experience with NoSQL DBs (Elasticsearch , Redis , MongoDB , etc.)</li>
            <li>Good knowledge of Python.</li>
            <li>"Let's make this happen!" attitude</li>
            <li>BSc in computer science/software engineering or other relevant education</li>
            <li>At least 1 year experience with NodeJS</li>
            <li>Take ownership and help drive the team and group efforts</li>
            <li>Team player, self learning abilities, independence.</li>
            <li>Proficiency with fundamental front end languages such as Json, XML, AJAX HTML, React, Angular, CSS and JavaScript.</li>
            <li>Familiarity with database technology NoSql –an advantage</li>
          </ul>
        </div>
      </SecondSection>
    </Container>
  );
}

export default CardsDetals4;

const Container = styled.div`
  height: 100vh;
  /* background-color: green; */
  text-align: right;
  width: 90%;
  margin: 2rem auto;
`;

const TopSection = styled.div`
  /* background-color: green; */
  margin-bottom: 3rem;
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const SecondSection = styled.div`
  /* background-color: green; */
  margin-bottom: 2rem;
  /* display: flex; */
`;
const TherdSection = styled.div`
  /* background-color: green; */
  margin-bottom: 3rem;
  /* display: flex; */
`;
