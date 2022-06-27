# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: To add a foreign key to the Students model I would create a new migration by doing the command rails g migration add_foreign_key_to_students in the terminal. The rails command generates a new migration with the name AddForeignKeyToStudents. Then I would navigate to that file in the migration folder of the rails application, and create the foreign key by adding a new column. I believe the syntax is something like: add_column :students, :cohort_id, :number. The name of the foreign key would be the parent class name with _id, the key would be on the student model because Cohort has_many students (so cohort is the parent).

  Researched answer: To add a foreign key to an already made Model I would have to generate a new migration. In that migration you can either add_column with its name as model_id with the datatype as integer, or the add_foreign_key command. The name of the foreign key is always the model_id that it belongs to. The foreign key would be in the schema to the student model in this case because the student model belongs_to the Cohort model. I have practiced adding foreign keys to a wildlife tracker api. I associated sightings to each animal in a database. Any of the animals could have any number of sightings with a datetime, and lat. long.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that need params are show, create, update, edit, and maybe destroy. These routes need params to allow for specific data in the table to be created, edited, or manipulated. I said maybe for destroy because you might need to pass params if you are destroying a specific id or column in a table. 

  Researched answer: The Restful routes that must always be passed params are: show, edit, update, and destroy. These routes must be passed params because they need to alter something specific in the table being accessed. At LEARN academy I had to create a wildlife tracking API. To be able to show a specific animal, I had to pass params in the route, otherwise I would get an error because the request was not sure which animal to show.



3. Name three rails generator commands. What is created by each?

  Your answer: Generate model, generate controller, generate migration. Generate model creates a new table in the database, with column names being able to be created as well. Generate controller creates a new migration that allows you to update tables. Generate controller creates a controller for a Model which allows for methods to create RESTful routes.

  Researched answer: Some of the generator commands for Rails are: model, controller, and migration. Model creates a new table in a database, and each column could be specified in the generate command by giving it a name, and a datatype. Controller generates a controller for a model that can be used to create methods for RESTful routes. Migration generates a migration file that can be used to alter the data of a model, or add association between other models. I have used these commands when creating a wildlife tracker API at LEARN Academy, however two of the commands were bundled in the generate resource command which generated the model, controller, and routes for the specified model.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students 
```      
this would be index, with the .all action. responsible for dsiplaying information in the table
```

action: "POST"   location: /students   
```    
this would be create with the .create action. responsible for creating new data in the table
```

action: "GET"    location: /students/new  
```
this would be the new method with .new. responsible for getting the data to be made.
```

action: "GET"    location: /students/2  
```
this would be the show method. with the specific primary key being used as a parameter to display the data.
```

action: "GET"    location: /students/2/edit  
```  
this would be the edit method. it is responsible for displaying the specific information of a parimary key being used. 
```

action: "PATCH"  location: /students/2
```      
this is the update/put method. it is responsible for actually changing specific data in the table.
```

action: "DELETE" location: /students/2      
```
this is the destroy method with the .destroy action. it is responsible for removing data from the table using primary key as a parameter.
```



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


    1. As a user I can log in/out of my account
    2. As a user I can see my tasks displayed on the screen.
    3. As a user I can create a new task that has:
    - title
    - date
    - deadline?-date
    - completed checkbox
    - description of task
    - priority
    4. As a user I can open a task to view its information
    5. As a user I can edit a task's information
    6. As a user I can complete task's by clicking a checkbox
    7. As a user I can see my completed tasks
    8. As a user I can remove tasks
    9. As a user I can add priority to my tasks ranging from least - most important 
    10. As a user I can sort my tasks by:
    - date entered
    - date to be completed
    - priority
    - alphabetical



