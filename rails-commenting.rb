# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostsController is a child of ApplicationController. It is the controller for the RESTful routes for BlogPosts class
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an instanced variable that holds all of the data in BlogPost 
    @posts = BlogPost.all
  end

  # ---3) show is a method that describes the 'show' RESTful route. It has an instanced variable @post that is assigned to a specific primary key defined by params. The .find method appended to the BlogPost class is what allows the method to search through the data to find that key.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new is a method that describes the 'new' RESTful route. It has an instanced variable @post that is assigned to a new BlogPost class. The .new method appended to the BlogPost class creates a new instance of that class.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)The instance variable @post is assigned to the class BlogPost with .create method appended to it. The .create method makes a new class with specific parameters defined by blog_post_params(found on line 64). If the creation of BlogPost is valid, the user is redirected to blog_post_path. If not the user is redirected to the new_blog_post_path.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)@post is an instanced variable assigned to BlogPost class. The .find method searches for a specific value in the class. The parameters are defined as the primary key. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The instanced variable @post has the .update method appended to it. The .update method changes parameters defined as blog_post_params(found on line 64) and saves it back to the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)redirect_to changes the current view of the user to a specific defined path. blog_post_path is the defined path with the parameters @post. This means the path is to a specific blog post, line 53 assignes @post to a primary key of BlogPost class.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private is a method that only allows the data below it to be called from within the class it is in. This means everything below line 63 can only be accessed by the BlogPostController class (this class).
  private
  def blog_post_params
    # ---10) The data below is creating strong params. Strong params are a way for developers to limit what a user has access to and what the user can manipulate in the database. The .require method is saying the only class to be accessed is BlogPost. The .permit method is saying the only data in that class to be changed is the tite, and the content.
    params.require(:blog_post).permit(:title, :content)
  end
end
