CREATE TABLE market_stall (
   id serial,
   title character varying(50) NOT NULL,
   average_rating integer,
   image text,
   category text NOT NULL,
   stall_website text,

   takes_card boolean,
   lat numeric(8,6),
   lang numeric(8,6),
   location text,
    PRIMARY KEY (ID)
);

CREATE TABLE dish (
   id serial,
   market_stall_id integer,
   dish_title text,
   price numeric(6,2),
   description text,
PRIMARY KEY(ID),
FOREIGN KEY(MARKET_STALL_ID) REFERENCES MARKET_STALL(ID)
);


CREATE TABLE review (
   id serial,
   market_stall_id integer,
   review text,
   rating integer,
   user_name text,
   time TIMESTAMP default current_timestamp NOT NULL,
PRIMARY KEY(ID),
FOREIGN KEY(MARKET_STALL_ID) REFERENCES MARKET_STALL (ID)
);

CREATE TABLE days_open (
   id serial,
   market_stall_id integer,
   monday boolean,
   tuesday boolean,
   wednesday boolean,
   thursday boolean,
   friday boolean,
   saturday boolean,
   sunday boolean,
PRIMARY KEY(ID),
FOREIGN KEY(market_stall_id) REFERENCES market_stall (id)
);



INSERT INTO days_open VALUES(0,1,true,true,true,true,true,true,false);
INSERT INTO days_open VALUES(1,1,true,true,false,true,true,true,false);
INSERT INTO days_open VALUES(2,2,false,true,true,true,true,false,false);
INSERT INTO days_open VALUES(3,3,true,true,false,true,false,true,false);
INSERT INTO days_open VALUES(4,4,true,true,true,true,true,true,true);
INSERT INTO days_open VALUES(5,5,true,false,false,true,true,false,false);
INSERT INTO days_open VALUES(6,6,true,true,false,true,true,true,false);
INSERT INTO days_open VALUES(7,7,true,true,true,true,true,true,false);
INSERT INTO days_open VALUES(8,8,true,true,false,true,true,false,false);
INSERT INTO days_open VALUES(9,9,true,true,true,true,true,true,false);




INSERT INTO market_stall VALUES (0, 'KIN',3, '/static/img/1.jpg', 'Asian', 'www.kin.com', false, 51.520130, 51.520130'leather_lane');
INSERT INTO market_stall VALUES (1, 'Boom Burger', 4, '/static/img/2.jpg', 'Burger', 'www.boomburger.com', true,51.520238 , -0.109688,'leather_lane');
INSERT INTO market_stall VALUES (2, 'Shake Shack', 4, '/static/img/3.jpg', 'American', 'www.shakeshack.com', false,51.520306, -0.109454,'leather_lane');
INSERT INTO market_stall VALUES (3, 'Curry House', 5, '/static/img/4.jpg', 'Indian', 'www.curryhouse.com', true, 51.519989, -0.109347, 'leather_lane');
INSERT INTO market_stall VALUES (4, 'Katsu Kate', 2, '/static/img/5.jpg', 'Korean', 'www.katsukate.com', true, 51.519810,-0.109283 , 'leather_lane');
INSERT INTO market_stall VALUES (5, 'Tom Yum', 1, '/static/img/6.jpg', 'Chinese', 'www.tomyum.com', false, 51.519536, -0.109176 ,'leather_lane');
INSERT INTO market_stall VALUES (6, 'Burrito Brothers', 4, '/static/img/7.jpg', 'Mexican', 'www.burritobrothers.com', false,  51.519864, -0.109308, 'leather_lane');
INSERT INTO market_stall VALUES (7, 'Street Food Studio', 5, '/static/img/7.jpg', 'European', 'www.streetfoodstudio.com', true, 51.520556, -0.109568 , 'leather_lane');
INSERT INTO market_stall VALUES (8, 'Middle East Food', 5, '/static/img/7.jpg', 'Lebanese', 'www.middleeaststall.com', false, 51.520643, -0.109607 ,'leather_lane');
INSERT INTO market_stall VALUES (9, 'German Hotdog', 3, '/static/img/7.jpg', 'German', 'www.germanhotdogs.com', true, 51.519905, -0.109323, 'leather_lane');

UPDATE MARKET_STALL SET lat = 51.520130, lang = 51.520130 WHERE id = 0;
UPDATE MARKET_STALL SET lat = 51.520238, lang = -0.109688 WHERE id = 1;
UPDATE MARKET_STALL SET lat = 51.520306, lang = -0.109454 WHERE id = 2;
UPDATE MARKET_STALL SET lat = 51.519989, lang = -0.109347 WHERE id = 3;
UPDATE MARKET_STALL SET lat = 51.519810, lang = -0.109283 WHERE id = 4;
UPDATE MARKET_STALL SET lat = 51.519536, lang = -0.109176 WHERE id = 5;
UPDATE MARKET_STALL SET lat = 51.519864, lang = -0.109308 WHERE id = 6;
UPDATE MARKET_STALL SET lat = 51.520556, lang = -0.109568 WHERE id = 7;
UPDATE MARKET_STALL SET lat = 51.520643, lang = -0.109607 WHERE id = 8;
UPDATE MARKET_STALL SET lat = 51.519905, lang = -0.109323 WHERE id = 9;



INSERT INTO dish VALUES(0,0,'Chicken With Waffles',6.00,'fried chicken with sweet waffles');
INSERT INTO dish VALUES(0,0,'Chicken With Noodles',7.00,'fried chicken with sweet waffles');
INSERT INTO dish VALUES(0,0,'Chicken Soup',5.00,'fried chicken with sweet waffles');


INSERT INTO dish VALUES(1,1,'Philly CheeseSteak',7.00,'Steak topped with cheese in a crisp bun');
INSERT INTO dish VALUES(1,1,'Cheese And Bacon',7.00,'Mature beef topped with cheese in a crisp bun');
INSERT INTO dish VALUES(1,1,'Chicken burger',7.00,'Fried chicken in a crisp bun');


INSERT INTO dish VALUES(2,2,'Oreo MilkShake',6.00,'Oreo crumbles mixed into a smooth milkshake');
INSERT INTO dish VALUES(2,2,'Vanillia MilkShake',4.00,'A smooth vanilla milkshake');
INSERT INTO dish VALUES(2,2,'Chocolate MilkShake',4.00,'A smooth chocolate milkshake');

INSERT INTO dish VALUES(3,3,'Chicken Curry',7.00,'Chicken curry in a creamy sauce');
INSERT INTO dish VALUES(3,3,'Beef Curry',8.00,'Beef curry in a creamy sauce');
INSERT INTO dish VALUES(3,3,'Lamb Curry',6.00,'Lamb curry in a creamy sauce');

INSERT INTO dish VALUES(4,4,'Chicken Katsu',6.00,'Chicken katsu in a rich gravy sauce');
INSERT INTO dish VALUES(4,4,'Beef Katsu',6.00,'Beef katsu in beef stock');
INSERT INTO dish VALUES(4,4,'Lamb Katsu',6.00,'Lamb katsu in a rich gravy sauce');

INSERT INTO dish VALUES(5,5,'Chicken Steamed Bun',7.00,'Freshly made bao stuffed with chicken');
INSERT INTO dish VALUES(5,5,'Lamb Steamed Bun',7.00,'Freshly made bao stuffed with chicken');
INSERT INTO dish VALUES(5,5,'Beef Steamed Bun',7.00,'Freshly made bao stuffed with chicken');

INSERT INTO dish VALUES(6,6,'Beef Burrito',8.00,'A spicy beef filled burrito');
INSERT INTO dish VALUES(6,6,'Chicken Burrito',8.00,'A spicy chicken filled burrito');
INSERT INTO dish VALUES(6,6,'Lamb Burrito',8.00,'A spicy lamb filled burrito');

INSERT INTO dish VALUES(7,7,'Cripsy Pork belly',7.00,'A sweet and cripsy pork belly');
INSERT INTO dish VALUES(7,7,'Chicken Schnitzel',7.00,'A sweet and cripsy shcnitzel');
INSERT INTO dish VALUES(7,7,'Fresh Salad',4.00,'A freshly prepared salad made daily');

INSERT INTO dish VALUES(8,8,'Grilled Hallomi',5.00,'Fresh grilled hallomi');
INSERT INTO dish VALUES(8,8,'Grilled King Prawns',7.00,'Grilled king prawns, served with garlic butter');
INSERT INTO dish VALUES(8,8,'Grilled Sea Bass',8.00,' Grilled sea bass sprinkled with garlic');

INSERT INTO dish VALUES(9,9,'Hotdog With Onions',7.00,'German hotdog stuffed with onions');
INSERT INTO dish VALUES(9,9,'Cumberland Hotdog',7.00,'German cumberland hotdog');
INSERT INTO dish VALUES(9,9,'Chicken Hotdog',7.00,'German chicken hotdog');



insert into review values (default,1,  'amazing!', 5, 'Luke');
insert into review values (default,0,  'amazing!', 5, 'Luke');
insert into review values (default,2,  'nice', 4, 'Luke');
insert into review values (default,3,  'soso', 2, 'Luke');
insert into review values (default,4,  'never come back!', 1, 'Luke');
insert into review values (default,5,  'amazing!', 5, 'Luke');
insert into review values (default,6,  'amazing!', 5, 'Luke');
insert into review values (default,1,  'bad', 5, 'Kate');
insert into review values (default,0,  'amazing!', 5, 'Kate');
insert into review values (default,2,  'below avg', 2, 'Kate');
insert into review values (default,3,  'soso', 3, 'Kate');
insert into review values (default,4,  'poor value for money', 1, 'Kate');
insert into review values (default,5,  'amazing!', 5, 'Kate');
insert into review values (default,6,  'amazing!', 5, 'Kate');

-- You will all need to add database
store.average_rating = averageRating[0] ? averageRating[0].average : 0;