<html>
    <head>
    </head>
    <body>
    <h1> Class concept in java script with Array</h1>
    <button onclick="f1()"> click me </button>
    <pre> 
     opp stand for - boject orinted proggraming.it is a proggraming techince.
     opp's features:--------
     1) Polymorphism ----- to represent more than one.
     2)Inheritance---- resusing class.
     3)Encapsulation------ collection of object.
     4)Abstractopn
     5)Data Haiding
     6)Class
     7)Obect etc....
     Q1. What is calss ?
      class is logical entity.cannot take space.
      in java script class is a special type of function.
      class is template/buleprint.
      class is spefication.
      class not support hosting concept.
      Q2. java script hosting:-
     Itdeclare variable but not instilizate variable.
     proggram of java script hosting:-------
     -------------------------------------------------
     x=100;
     alert(x);
     var x; // var keyword are supported in java script.
     let x; // let keyword not supported in java script hosting.
     const x; // const keyword not supported in not supported.
     ----------------------------------------------------------
     there are two technice to declare the class in java script.
     1) via Class declaration
     2) via class expression.
     -----------------------------------------------------------
     1) syntax of class delacration with via class delaration.
       class Employee
       {
           eno=101;
           ename="Ritesh";
           esal=15000;
       }  
       emp=new Employee(); //to call class with object name.
       alert(emp.eno + emp.ename + emp.esal);
       -------------------------------------------------------
       class syntax with via class declaration with behaviours 
         class Employee{
             eno=101;
             ename="ritesh";
             info= function(){
                 this.eno + "" + this.ename;
             }
         }
          emp=new Employee();
          emp.info;
        -----------------------------------------------------------------
        Q5) Constructor:---- Constructor is a special method . It is use to Instize an object.
        ___-------------------------------------------------------------------------------------
        opp variavle
        1)Local variable
        2)Instance variable
        3)Object level class
        

    </pre>
    <script>
    
    </script>
    </body>
</html>