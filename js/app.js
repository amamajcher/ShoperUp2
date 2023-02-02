// Zadanie 1
const tab = [1,2,3,4];
function checkTable(table,x){
    return table.includes(x);
};

console.log(tab);
console.log(checkTable(tab,2));

// Zadanie 2
const tablestring = ["ala ma kota", "test test", "xxx"];

function convertStringToArrays(tablestring, separator){
    let emptytable = [];
    for (let i=0; i<tablestring.length; i++){
        emptytable.push(tablestring[i].split(separator));
    }

    return emptytable;
}
console.log(convertStringToArrays(tablestring, " "));

// Zadanie na koniec semestru

const postContent = [
    {
      post_header_img: "./images/users/john.jpeg",
      post_header_name: "John Doe",
      post_hedaer_location: "Szczecin, Polska",
      post_content_img: "./images/photos/gielda.jpeg",
      post_likes: "Liczba polubień: 2",
      post_coments_strong: "Will Smith:",
      post_comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!"
    },
    {
        post_header_img: "./images/users/lisa.jpeg",
        post_header_name: "Lisa",
        post_hedaer_location: "Kraków, Polska",
        post_content_img: "./images/photos/stoisko.jpeg",
        post_likes: "Liczba polubień: 3",
        post_coments_strong: "Will Smith:",
        post_comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!"
    },
    {
        post_header_img: "./images/users/cristiano.jpeg",
        post_header_name: "Cristiano",
        post_hedaer_location: "Kraków, Polska",
        post_content_img: "./images/photos/presentation.jpeg",
        post_likes: "Liczba polubień: 4",
        post_coments_strong: "Will Smith:",
        post_comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint veritatis omnis, quos magni ducimus enim officia praesentium itaque soluta ipsam delectus, voluptate quod culpa, temporibus a minus dicta necessitatibus!"
    }
  ];

  const postWrapper = document.querySelector(".postWrapper");
  
postContent.map(function(element, index){
  const post = document.createElement("div");
  post.setAttribute("class","post");
  postWrapper.appendChild(post);
  const postHeader = document.createElement("div");
  postHeader.setAttribute("class","post__header");
  post.appendChild(postHeader);
  const userDetails = document.createElement("div");
  userDetails.setAttribute("class","user-details");
  postHeader.appendChild(userDetails);
  const userDetailsImg = document.createElement("div");
  userDetailsImg.setAttribute("class","user-details__img");
  userDetails.appendChild(userDetailsImg);
  const imageSquare = document.createElement("div");
  imageSquare.setAttribute("class","image-square image-square--small is-active");
  userDetailsImg.appendChild(imageSquare);
  const postImg = document.createElement("img");
  postImg.setAttribute("src", postContent[index].post_header_img);
  imageSquare.appendChild(postImg);
  const userDetailsContent = document.createElement("div");
  userDetailsContent.setAttribute("class","user-details__content");
  userDetails.appendChild(userDetailsContent); 
  const postName = document.createElement("h3");
  postName.innerText = postContent[index].post_header_name;
  userDetailsContent.appendChild(postName);
  const postLocation = document.createElement("p");
  postLocation.innerText = postContent[index].post_hedaer_location;
  userDetailsContent.appendChild(postLocation);
  //post_content
  const postContentContainter = document.createElement("div");
  postContentContainter.setAttribute("class","post__content");
  post.appendChild(postContentContainter);
  const postContentImg = document.createElement("div");
  postContentImg.setAttribute("class","post__img");
  postContentContainter.appendChild(postContentImg);
  const contentImg = document.createElement("img");
  contentImg.setAttribute("src", postContent[index].post_content_img);
  postContentImg.appendChild(contentImg);
  const postComments = document.createElement("div");
  postComments.setAttribute("class","post__comments post__details");
  postContentContainter.appendChild(postComments);
  const likes = document.createElement("p");
  postComments.appendChild(likes);
  const strong = document.createElement("strong");
  likes.appendChild(strong);
  strong.innerText = postContent[index].post_likes;
  const postCommentsComment = document.createElement("p");
  postCommentsComment.setAttribute("class","post__comments-comment");
  postComments.appendChild(postCommentsComment);
  const commentStrong = document.createElement("strong");
  postCommentsComment.appendChild(commentStrong);
  commentStrong.innerText = postContent[index].post_coments_strong;
  const commentp = document.createElement("p");
  commentp.innerText = postContent[index].post_comments;
  postCommentsComment.appendChild(commentp);
});