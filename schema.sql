DROP DATABASE IF EXISTS world_language;
CREATE DATABASE world_language;

\c world_language;

CREATE TABLE accounts (
	account_id SERIAL NOT NULL PRIMARY KEY,
	email VARCHAR(64),
	pw_hash VARCHAR(60),
	first_name VARCHAR(24),
	last_name VARCHAR(24),
	avatar_url TEXT,
	is_teacher BOOLEAN
);

CREATE INDEX accounts_email_idx ON accounts (email);

CREATE TABLE connections (
	conn_id SERIAL NOT NULL,
	req_account_id INT NOT NULL REFERENCES accounts(account_id),
	rec_account_id INT NOT NULL REFERENCES accounts(account_id),
	status BOOLEAN
);

CREATE INDEX connections_req_account_id_idx ON connections (req_account_id);

CREATE TABLE classes (
	class_id SERIAL NOT NULL PRIMARY KEY,
	teacher_id INT NOT NULL REFERENCES accounts(account_id),
	class_name VARCHAR(24)
);

CREATE INDEX classes_teacher_id_idx ON classes (teacher_id);

CREATE TABLE enrollments (
	enrollment_id SERIAL NOT NULL PRIMARY KEY,
	account_id INT NOT NULL,
	class_id INT NOT NULL
);

ALTER TABLE enrollments
	ADD CONSTRAINT fk_enrollments_account_id FOREIGN KEY (account_id) REFERENCES accounts(account_id),
	ADD CONSTRAINT fk_enrollments_class_id FOREIGN KEY (class_id) REFERENCES classes(class_id);

CREATE INDEX enrollments_account_id_idx ON enrollments (account_id);

CREATE TABLE languages (
	lang_id SERIAL NOT NULL PRIMARY KEY,
	lang_name VARCHAR(60) NOT NULL,
	lang_icon_url TEXT,
	lang_bg_url TEXT,
	CONSTRAINT lang_name_unique UNIQUE (lang_name)
);

CREATE INDEX languages_lang_name_idx ON languages (lang_name);

-- TODO: Change enum to INT range(?)
CREATE TABLE ratings (
	rating_id SERIAL NOT NULL,
	rating_account_id INT,
	rated_account_id INT,
	rated_lang_id INT,
	rating SMALLINT
);

ALTER TABLE ratings
	ADD CONSTRAINT fk_rating_account_id FOREIGN KEY (rating_account_id) REFERENCES accounts(account_id),
	ADD CONSTRAINT fk_rated_account_id FOREIGN KEY (rated_account_id) REFERENCES accounts(account_id),
	ADD CONSTRAINT fk_rated_lang_id FOREIGN KEY (rated_lang_id) REFERENCES languages(lang_id),
	ADD CONSTRAINT rating_check CHECK (rating >= 1 AND rating <= 4);

CREATE INDEX ratings_rated_account_id_idx ON ratings (rated_account_id);

CREATE TYPE taught_level_vals AS ENUM ('1','2','3','4','5','AP');
CREATE TABLE taught_languages (
	taught_lang_id SERIAL NOT NULL PRIMARY KEY,
	teacher_id INT NOT NULL,
	lang_id INT,
	taught_level taught_level_vals
);

ALTER TABLE taught_languages
	ADD CONSTRAINT fk_taught_languages_teacher_id FOREIGN KEY (teacher_id) REFERENCES accounts(account_id),
	ADD CONSTRAINT fk_taught_languages_lang_id FOREIGN KEY (lang_id) REFERENCES languages(lang_id);

CREATE INDEX taught_languages_teacher_id_idx ON taught_languages (teacher_id);

CREATE TABLE known_languages (
	known_lang_id SERIAL NOT NULL PRIMARY KEY,
	user_id INT NOT NULL,
	lang_id INT NOT NULL
);

ALTER TABLE known_languages
	ADD CONSTRAINT fk_known_languages_user_id FOREIGN KEY (user_id) REFERENCES accounts(account_id),
	ADD CONSTRAINT fk_known_languages_lang_id FOREIGN KEY (lang_id) REFERENCES languages(lang_id);

CREATE INDEX known_languages_user_id_idx ON known_languages (user_id);

CREATE TABLE desired_languages (
	desired_lang_id SERIAL NOT NULL PRIMARY KEY,
	user_id INT NOT NULL,
	lang_id INT NOT NULL
);

ALTER TABLE desired_languages
	ADD CONSTRAINT fk_desired_languages_user_id FOREIGN KEY (user_id) REFERENCES accounts(account_id),
	ADD CONSTRAINT fk_desired_languages_lang_id FOREIGN KEY (lang_id) REFERENCES languages(lang_id);

CREATE INDEX desired_languages_user_id_idx ON desired_languages (user_id);

CREATE TABLE account_room (
	room_id SERIAL NOT NULL PRIMARY KEY,
	account_id_1 INT NOT NULL,
	account_id_2 INT NOT NULL
);

ALTER TABLE account_room
	ADD CONSTRAINT fk_account_room_account_id_1 FOREIGN KEY (account_id_1) REFERENCES accounts(account_id),
	ADD CONSTRAINT fk_account_room_account_id_2 FOREIGN KEY (account_id_2) REFERENCES accounts(account_id);

CREATE TABLE account_message (
	message_id SERIAL NOT NULL PRIMARY KEY,
	room_id INT NOT NULL,
	account_id INT NOT NULL,
	message VARCHAR(1000),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE account_message
	ADD CONSTRAINT fk_account_message_room_id FOREIGN KEY(room_id) REFERENCES account_room(room_id),
	ADD CONSTRAINT fk_account_message_account_id FOREIGN KEY(account_id) REFERENCES accounts(account_id);

CREATE INDEX account_message_room_id_idx ON account_message (room_id);

--table for the meetings
CREATE TABLE meetings (
	conn_id SERIAL NOT NULL,
	description VARCHAR(300),
	req_account_id INT NOT NULL REFERENCES accounts(account_id),
	rec_account_id INT NOT NULL REFERENCES accounts(account_id),
	start_time TIMESTAMP NOT NULL,
	status BOOLEAN DEFAULT false
);

CREATE INDEX meetings_req_account_id_idx ON meetings (req_account_id);

-- CREATE TABLE p2p_message (
-- 	message_id SERIAL NOT NULL PRIMARY KEY,
-- 	sender_account_id INT NOT NULL,
-- 	recipient_account_id INT NOT NULL,
-- 	message VARCHAR(1000),
-- 	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- ALTER TABLE p2p_message
-- 	ADD CONSTRAINT fk_p2p_message_sender_account_id FOREIGN KEY(sender_account_id) REFERENCES accounts(account_id),
-- 	ADD CONSTRAINT fk_p2p_message_recipient_account_id FOREIGN KEY(recipient_account_id) REFERENCES accounts(account_id);

-- CREATE INDEX p2p_message_room_id_idx ON p2p_message(sender_account_id);
