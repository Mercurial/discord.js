"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = (function () {
	function User(data) {
		_classCallCheck(this, User);

		this.username = data.username;
		this.discriminator = data.discriminator;
		this.id = data.id;
		this.avatar = data.avatar;
	}

	// access using user.avatarURL;

	_createClass(User, [{
		key: "mention",
		value: function mention() {
			return "<@" + this.id + ">";
		}
	}, {
		key: "toString",
		value: function toString() {
			/*
   	if we embed a user in a String - like so:
   	"Yo " + user + " what's up?"
   	It would generate something along the lines of:
   	"Yo @hydrabolt what's up?"
   */
			return this.mention();
		}
	}, {
		key: "equals",
		value: function equals(object) {
			return object.id === this.id;
		}
	}, {
		key: "equalsStrict",
		value: function equalsStrict(object) {
			return object.id === this.id && object.avatar === this.avatar && object.username === this.username && object.discriminator === this.discriminator;
		}
	}, {
		key: "avatarURL",
		get: function get() {
			if (!this.avatar) return null;
			return "https://discordapp.com/api/users/" + this.id + "/avatars/" + this.avatar + ".jpg";
		}
	}]);

	return User;
})();

module.exports = User;