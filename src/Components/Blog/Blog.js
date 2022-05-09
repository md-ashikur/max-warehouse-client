import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='my-5 container'>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header> Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                    <p><b>JavaScript</b> is a programming language that runs in any browser JavaScript Engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). It used for any client-side activity for one web application.
                    <br></br>
                    <b>Node</b> JS is an interpreter  for a JS. It only support the V8 engine. It's used for accessing any operating system for non-blocking operation</p>
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
                    <Accordion.Body>
                        <p><b>SQL databases</b> use structured query language. It's better for multi-row transactions.SQL databases are table-based and vertically scalable.
                        <br />
                        <b>NoSQL databases</b> have dynamic schemas for unstructured data. It's better for unstructured data like documents or JSON. This database are document, key-value, graph, or wide-column stores based. </p>
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header> What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p>The purpose of JSON Web Token (JWT) is to secure way to authenticate users and share information. It's a string made up of three parts, separated by dots (.), and serialized using base64. <br /> Two steps in using JWT 1) send them over an encrypted channel, and 2) verify the signature immediately upon receiving it. It will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;
