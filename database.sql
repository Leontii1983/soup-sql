create table soupes(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    weight INTEGER,
    price INTEGER,
    description VARCHAR(255),
    ingridients VARCHAR(255),
    image VARCHAR(255)[],
    video VARCHAR(255)[],
    nutrition VARCHAR(255)[],
    vitamines VARCHAR(255)[],
    expiry INTEGER
);