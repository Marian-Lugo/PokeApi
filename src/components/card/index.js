const card = ({name="ditto", img=""})=>{
    return `
    <article class="card text-center">
        <img src="${img}" 
         alt="${name}" 
         class="card-img-top"
        />
        <div class="card-body">
            <p class="card-title">${name}</p>
        </div>
    </article>
    `;
};

export default card;