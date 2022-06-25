# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: To add a foreign key to the Students model I would create a new migration by doing the command rails g migration add_foreign_key_to_students in the terminal. The rails command generates a new migration with the name AddForeignKeyToStudents. Then I would navigate to that file in the migration folder of the rails application, and create the foreign key by adding a new column. I believe the syntax is something like: add_column :students, :cohort_id, :number. The name of the foreign key would be the parent class name with _id, the key would be on the student model because Cohort has_many students (so cohort is the parent).

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: generate model, generate controller, generate migration. Generate model creates a new table in the database, with column names being able to be created as well. Generate controller creates a new migration that allows you to update tables. Generate controller creates a controller for a Model which allows for methods to create RESTful routes.

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          

action: "POST"   location: /students       

action: "GET"    location: /students/new

action: "GET"    location: /students/2  

action: "GET"    location: /students/2/edit    

action: "PATCH"  location: /students/2      

action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
