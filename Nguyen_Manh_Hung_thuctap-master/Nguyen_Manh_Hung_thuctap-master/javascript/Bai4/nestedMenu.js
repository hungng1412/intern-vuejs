const nestedMenu = [
    {
      name: "menu level 1",
      child: [
        {
          name: "menu level 2",
        },
        {
          name: "menu level 2",
        },
      ],
    },
    {
      name: "menu level 1",
    },
    {
      name: "menu level 1",
      child: [
        {
          name: "menu level 2",
        },
        {
          name: "menu level 2",
          child: [
            {
              name: "menu level 3",
            },
          ],
        },
      ],
    },
  ];


function createMenuHTML(menu) {
    const ul = document.createElement('ul');

    menu.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.child) {
            li.appendChild(createMenuHTML(item.child));
       }
        ul.appendChild(li);
    });

    return ul;
}

const ul = document.getElementById('container');
ul.appendChild(createMenuHTML(nestedMenu));

    