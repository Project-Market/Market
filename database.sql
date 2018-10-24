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
PRIMARY KEY(ID),
FOREIGN KEY(MARKET_STALL_ID) REFERENCES MARKET_STALL (ID)
);

CREATE TABLE days_open (
   id serial,
   market_stall_id integer,
   monday_open text,
   monday_close text,
   tuesday_open text,
   tuesday_close text,
   wednesday_open text,
   wednesday_close text,
   thursday_open text,
   thursday_close text,
   friday_open text,
   friday_close text,
PRIMARY KEY(ID),
FOREIGN KEY(MARKET_STALL_ID) REFERENCES MARKET_STALL (ID)
);


INSERT INTO market_stall VALUES (0, 'KIN',3, '/static/img/1.jpg', 'asian', 'www.kin.com', true, null ,null, 'leather_lane');
INSERT INTO market_stall VALUES (1, 'Boom Burger', 4, '/static/img/2.jpg', 'burger', 'www.kin.com', false, null ,null, 'leather_lane');
INSERT INTO market_stall VALUES (2, 'Jamal Shake Shack', 1, '/static/img/3.jpg', 'american', 'www.kin.com', false, null ,null, 'leather_lane');
INSERT INTO market_stall VALUES (3, 'Luke Warm Curry', 5, '/static/img/4.jpg', 'indian', 'www.kin.com', true, null ,null, 'leather_lane');
INSERT INTO market_stall VALUES (4, 'Katsu Kate', 4, '/static/img/5.jpg', 'asian', 'www.kin.com', true, null ,null, 'leather_lane');
INSERT INTO market_stall VALUES (5, 'Tom Yum', 2, '/static/img/6.jpg', 'asian', 'www.kin.com', false, null ,null, 'leather_lane');
INSERT INTO market_stall VALUES (6, 'Burrito Brothers', 5, '/static/img/7.jpg', 'mexican', 'www.kin.com', false, null ,null, 'leather_lane');
ALTER SEQUENCE market_stall_id_seq RESTART WITH 7 INCREMENT BY 1;

INSERT INTO dish VALUES(1,0,'chicken and waffles',6.00,'fried chicken with sweet waffles')
