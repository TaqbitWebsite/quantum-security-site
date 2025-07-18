function loadIncludes() {
    fetch('header.html')
        .then(res => res.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data);

    fetch('footer.html')
        .then(res => res.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);
}

// Run after page loads
window.addEventListener('DOMContentLoaded', loadIncludes);



// async function fetchArticles() {
//   const response = await fetch('http://localhost:1337/api/articles?populate=coverImage');
//   const data = await response.json();
//   return data.data;
// }

// // Render articles to HTML
// async function renderArticles() {
//   const articles = await fetchArticles();
//   const container = document.getElementById('all-posts-grid'); // Match your HTML

//   articles.forEach(article => {
//     const articleHTML = `
//       <div class="card-hover-effect bg-white rounded-lg shadow-md">
//         <img src="http://localhost:1337${article.attributes.coverImage.data.attributes.url}" 
//              alt="${article.attributes.title}" 
//              class="h-48 w-full object-cover">
//         <div class="p-6">
//           <span class="text-xs bg-blue-500 text-white px-2 py-1 rounded">
//             ${article.attributes.category}
//           </span>
//           <h3 class="text-lg font-bold mt-2">${article.attributes.title}</h3>
//           <p class="text-gray-600 text-sm mt-2">${article.attributes.excerpt}</p>
//           <div class="mt-4 text-sm text-gray-500">
//             ${article.attributes.publishedAt.split('T')[0]} • ${article.attributes.author}
//           </div>
//         </div>
//       </div>
//     `;
//     container.innerHTML += articleHTML;
//   });
// }

// // Call on page load
// document.addEventListener('DOMContentLoaded', renderArticles);