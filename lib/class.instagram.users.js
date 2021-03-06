(function() {
  var InstagramUsers;
  InstagramUsers = (function() {
    function InstagramUsers(parent) {
      this.parent = parent;
    }
    /*
      User Basics
      */
    InstagramUsers.prototype.info = function(params) {
      var credentials;
      credentials = this.parent._credentials({});
      params['path'] = "/" + this.parent._api_version + "/users/" + params['user_id'] + "?" + (this.parent._to_querystring(credentials));
      return this.parent._request(params);
    };
    InstagramUsers.prototype.search = function(params) {
      params = this.parent._credentials(params);
      params['path'] = "/" + this.parent._api_version + "/users/search?" + (this.parent._to_querystring(params));
      return this.parent._request(params);
    };
    /*
      Media
      */
    InstagramUsers.prototype.self = function(params) {
      params = this.parent._credentials(params, 'access_token');
      params['path'] = "/" + this.parent._api_version + "/users/self/feed?" + (this.parent._to_querystring(params));
      return this.parent._request(params);
    };
    InstagramUsers.prototype.liked_by_self = function(params) {
      params = this.parent._credentials(params, 'access_token');
      params['path'] = "/" + this.parent._api_version + "/users/self/media/liked?" + (this.parent._to_querystring(params));
      return this.parent._request(params);
    };
    InstagramUsers.prototype.recent = function(params) {
      params = this.parent._credentials(params, 'access_token');
      params['path'] = "/" + this.parent._api_version + "/users/" + params['user_id'] + "/media/recent?" + (this.parent._to_querystring(params));
      return this.parent._request(params);
    };
    /*
      Relationships
      */
    InstagramUsers.prototype.follows = function(params) {
      var credentials;
      credentials = this.parent._credentials({}, 'access_token');
      params['path'] = "/" + this.parent._api_version + "/users/" + params['user_id'] + "/follows?" + (this.parent._to_querystring(credentials));
      return this.parent._request(params);
    };
    InstagramUsers.prototype.followed_by = function(params) {
      var credentials;
      credentials = this.parent._credentials({}, 'access_token');
      params['path'] = "/" + this.parent._api_version + "/users/" + params['user_id'] + "/followed-by?" + (this.parent._to_querystring(credentials));
      return this.parent._request(params);
    };
    InstagramUsers.prototype.requested_by = function(params) {
      var credentials;
      credentials = this.parent._credentials({}, 'access_token');
      params['path'] = "/" + this.parent._api_version + "/users/self/requested-by?" + (this.parent._to_querystring(credentials));
      return this.parent._request(params);
    };
    InstagramUsers.prototype.relationship = function(params) {
      var credentials;
      credentials = this.parent._credentials({}, 'access_token');
      if (params['action'] != null) {
        params['method'] = 'POST';
        params['post_data'] = {
          access_token: credentials['access_token'],
          action: params['action']
        };
        params['path'] = "/" + this.parent._api_version + "/users/" + params['user_id'] + "/relationship";
      } else {
        params['path'] = "/" + this.parent._api_version + "/users/" + params['user_id'] + "/relationship?" + (this.parent._to_querystring(credentials));
      }
      return this.parent._request(params);
    };
    InstagramUsers.prototype.follow = function(params) {
      params['action'] = 'follow';
      return this.relationship(params);
    };
    InstagramUsers.prototype.unfollow = function(params) {
      params['action'] = 'unfollow';
      return this.relationship(params);
    };
    InstagramUsers.prototype.block = function(params) {
      params['action'] = 'block';
      return this.relationship(params);
    };
    InstagramUsers.prototype.unblock = function(params) {
      params['action'] = 'unblock';
      return this.relationship(params);
    };
    InstagramUsers.prototype.approve = function(params) {
      params['action'] = 'approve';
      return this.relationship(params);
    };
    InstagramUsers.prototype.ignore = function(params) {
      params['action'] = 'ignore';
      return this.relationship(params);
    };
    /*
      Subscriptions
      */
    InstagramUsers.prototype.subscribe = function(params) {
      params['object'] = 'user';
      return this.parent.subscriptions._subscribe(params);
    };
    InstagramUsers.prototype.unsubscribe_all = function(params) {
      params['object'] = 'user';
      return this.parent.subscriptions._unsubscribe(params);
    };
    return InstagramUsers;
  })();
  module.exports = InstagramUsers;
}).call(this);
