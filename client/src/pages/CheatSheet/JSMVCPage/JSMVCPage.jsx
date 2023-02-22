import React from 'react'
import {CopyBlock, github,dracula} from "react-code-blocks";
import {Container, Row, Col} from "react-bootstrap"
import NavBarCheatsheet from '../../../components/NavBarCheatsheet/NavBarCheatsheet';

export default function JSMVCPage() {
    return (
    <>
        <NavBarCheatsheet />
        <Container fluid>
        <Row>
            <Col>
                <section id="MVC-Array" >
                <h2>MVC Array</h2>

                <h5>VIEW</h5>  
                <CopyBlock
                    language="jsx"
                    text={`                   
                    <body>
                        <h1>New Todo</h1>
                        <form action="/todos" method="POST" autocomplete="off">
                        <input type="text" name="todo">
                        <button type="submit">Save Todo</button>
                        </form>
                    </body>
                        `}
                        codeBlock
                        theme={dracula}
                        showLineNumbers={false}
                />  


                <h5>ROUTER</h5>
                router.get('/', todosCtrl.index);<br />
                router.get('/:id', todosCtrl.show);<br />
                router.get('/new', todosCtrl.new);<br />

                <h5>CONTROLLER</h5>
                res.render: a view in the case of a get request
                res.redirect: if data was changes
                <CopyBlock
                    language="jsx"
                    text={`                   
                        function show (req,res) {
                            const todo = Todo.getOne (req.params.id);
                            res.send (todo ? todo : "not found")
                        }
                        
                        function newTodo (req,res) {
                            res.render('todos/new.ejs')
                        }
                        module.exports = {
                            index,
                            show,
                            new: newTodo,
                         };
                        `}
                        codeBlock
                        theme={dracula}
                        showLineNumbers={false}
                />  

                <h5>MODELs</h5>
                <CopyBlock
                language="jsx"
                text={`                           
                    const todos = [
                    {id: 125223, todo: 'Feed Dogs', done: true},
                    {id: 127904, todo: 'Learn Express', done: false},
                    {id: 139608, todo: 'Buy Milk', done: false}
                    ];

                    module.exports = {
                        getAll
                    };                 
                    function getAll() {
                        return todos;
                    }
                    function getOne (id) {
                        todos.find((id)=>{})
                    }
                    `}
                    
                    codeBlock
                    theme={dracula}
                    showLineNumbers={false}
                />  
                </section>

                <section id="MVC-Mongo">
                    <h5>VIEW</h5>
                    <h5>ROUTER</h5>
                    <h5>CONTROLLER</h5>
                    <h5>MODEL</h5>
                </section>                     
            </Col>
        </Row>
    </Container>
    </>
    
  )
}
