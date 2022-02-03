CREATE TABLE category(
    category_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    category_name varchar(255) NOT NULL UNIQUE
);

INSERT INTO category(category_name) VALUES('FastFood');
INSERT INTO category(category_name) VALUES('MilliyTaomlar');

CREATE TABLE restaurants(
    res_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    res_name varchar(255) NOT NULL,
    res_img text NOT NULL,
    res_category uuid NOT NULL,
    FOREIGN KEY (res_category)
        REFERENCES category(category_id)
        ON DELETE CASCADE
);

INSERT INTO restaurants(res_name,res_img,res_category) VALUES('Evos','https://media-cdn.tripadvisor.com/media/photo-s/0a/41/40/24/feel-great-food.jpg','52005c4c-8412-4882-8b93-695751ebf3f4');

INSERT INTO restaurants(res_name,res_img,res_category) VALUES('MaxWay','https://patch.com/img/cdn/users/54487/2011/07/raw/333bbbf1d6558cdc2ffc3430c74689e1.jpg','52005c4c-8412-4882-8b93-695751ebf3f4');

INSERT INTO restaurants(res_name,res_img,res_category) VALUES('Rayhon','https://media-cdn.tripadvisor.com/media/photo-s/11/0b/61/ac/rayhon-milliyy-taomlar.jpg','6c4fc00f-4b41-451b-a96e-2cbb66bf5088');

CREATE TABLE foods(
    food_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    food_name varchar(255) NOT NULL,
    food_cost varchar(255) NOT NULL,
    food_img text NOT NULL,
    food_res uuid NOT NULL,
    FOREIGN KEY (food_res)
        REFERENCES restaurants(res_id)
        ON DELETE CASCADE
);

INSERT INTO foods(food_name,food_cost,food_img,food_res) VALUES('Lavash','23000','https://i0.wp.com/www.atoriasfamilybakery.com/wp-content/uploads/2019/03/062.jpg?w=1000&ssl=1','f52e2d80-8b66-4c83-8e52-5c09a97c26ef');

INSERT INTO foods(food_name,food_cost,food_img,food_res) VALUES('Gamburger','20000','https://ist1.objorka.com/img0008/68/868_0118lvj_1019_6hi.jpg','f52e2d80-8b66-4c83-8e52-5c09a97c26ef');

INSERT INTO foods(food_name,food_cost,food_img,food_res) VALUES('Kabob','11000','https://silkroadrecipes.com/wp-content/uploads/2020/07/Kabab-Koobideh-Beef-and-Lamb-Kabobs-square.jpg','c79d3135-dbec-40c5-abc3-beb5ac5c686d ');

INSERT INTO foods(food_name,food_cost,food_img,food_res) VALUES('Palov','38000','https://globalstorybook.org/wp-content/uploads/2018/01/Palov-Main-Dish-With-Rice-Meat-Raisins-and-Carrots-Recipe-Uzbekistan-Global-Storybook2-2.jpg','c79d3135-dbec-40c5-abc3-beb5ac5c686d');

CREATE TABLE orders(
    order_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    order_res_id uuid NOT NULL,
    owner_name varchar(255) NOT NULL,
    owner_tel varchar(20) NOT NULL,
    owner_location varchar(255),
    order_time varchar(255) NOT NULL,
    order_cost int NOT NULL,
    order_discription text NOT NULL
);

CREATE TABLE superadmin(
    admin_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    admin_name varchar(255) NOT NULL,
    admin_password varchar(255) NOT NULL
);

INSERT INTO superadmin(admin_name,admin_password) VALUES('superadmin','superadmin@123');