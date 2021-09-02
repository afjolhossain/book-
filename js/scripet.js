
const SearchInputField = () => {
    const InputField = document.getElementById('search-Field');
    const InputText = InputField.value;

    InputField.value = '';

    const url = `https://openlibrary.org/search.json?q=${InputText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaybook(data.docs))
}

SearchInputField();

const displaybook = (books) => {
    const displayItems = document.getElementById('display-detiald');
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
       <div class="card">
       <img fluid width="150px" height"150px" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
       <div class="card-body">
       <h4>Book name:${book.title}</h4>
           <h5>author_name:${book.author_name}</h5>
           <p>publish_year:${book.first_publish_year}</p>
       </div>
   </div>     
       `
        displayItems.appendChild(div);
    })
}
