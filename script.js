const aboutMe = {
    name: "Rizki Taqi",
    email: "rizkitaqi25@gmail.com",
    role: "Software Engineer/Data Analyst",
    bio: "Entrepreneurship student passionate in data & Entry Level Front End Programming. Currently diving into data analytics & frontend tech.",
    photo: "https://i.imgur.com/4ZQZ4vq.png" // bisa ganti link foto profil kamu
  };
  
  const profileContainer = document.getElementById("profile");
  
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <img src="${aboutMe.photo}" alt="Profile Picture" />
    <h2>${aboutMe.name}</h2>
    <p><strong>${aboutMe.role}</strong></p>
    <p>${aboutMe.bio}</p>
  `;
  
  profileContainer.appendChild(card);
  