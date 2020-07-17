var img = document.getElementById("myImage");

document.getElementById("next").addEventListener("click", function()
{
    if(img.src == "file:///Users/caden/Final-Project/Final%20Project/friends.PNG")
        {
            img.src = "frodoBurrito.PNG";
        }
    else if(img.src == "file:///Users/caden/Final-Project/Final%20Project/frodoBurrito.PNG")
        {
            img.src = "skiing.PNG";
        }
        else if(img.src == "file:///Users/caden/Final-Project/Final%20Project/skiing.PNG")
        {
            img.src = "friendsWinter.jpg";
        }
        else if(img.src == "file:///Users/caden/Final-Project/Final%20Project/friendsWinter.jpg")
        {
            img.src = "friends.PNG";
        }
});
document.getElementById("last").addEventListener("click", function()
{
    if(img.src == "file:///Users/caden/Final-Project/Final%20Project/friends.PNG")
        {
            img.src = "friendsWinter.jpg";
        }
    else if(img.src == "file:///Users/caden/Final-Project/Final%20Project/frodoBurrito.PNG")
        {
            img.src = "friends.PNG";
        }
        else if(img.src == "file:///Users/caden/Final-Project/Final%20Project/skiing.PNG")
        {
            img.src = "frodoBurrito.PNG"
        }
        else if(img.src=="file:///Users/caden/Final-Project/Final%20Project/friendsWinter.jpg")
        {
            img.src="skiing.PNG"
        }
});

document.getElementById("School").addEventListener("click", function()
{
    document.getElementById("text").innerHTML = "I am an upper at Phillips Exeter Academy <br /> - a dorm proctor for Main Street <br /> - and I run a radio show with my friend <br /> Phillips Exeter Academy is Located in Exeter, NH. The school uses the Harkness method of teaching where 12 students have a conversation across a round wooden table.  This fall the school will be opening classes as a hybrid between online and face-to-face.";
});

document.getElementById("Bio").addEventListener("click", function()
{
    document.getElementById("text").innerHTML = "Age: 16 <br /> I was born in Rhode Island in 2003. When I was 4, my family and I traveled across the United States for 6 months, visiting all of the most wondrous places in the country, such as the national parks. We then settled down in New Hampshire.";
});

document.getElementById("Photos").addEventListener("click", function()
{
    document.getElementById("text").innerHTML = "   ";
});

document.getElementById("Contact").addEventListener("click", function()
{
    document.getElementById("text").innerHTML = "Instagram: @cadenschroeder <br /> Email: cschroeder@exeter.edu";
});