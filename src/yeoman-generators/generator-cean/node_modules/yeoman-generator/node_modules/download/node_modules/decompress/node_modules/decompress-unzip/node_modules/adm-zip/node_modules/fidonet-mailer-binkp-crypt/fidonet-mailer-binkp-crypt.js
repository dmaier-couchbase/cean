var bcrypt=require('./build/Release/crypt');

var crypt=function(password) {
	if (!(this instanceof crypt)) return new crypt(password);
	this.password=password;
	this.crypt=new bcrypt.BinkpCrypt();
};
crypt.prototype.init_keys=function(){
	this.crypt.init_keys(this.password);
};
crypt.prototype.decrypt_buf=function(buf) {
	return this.crypt.decrypt_buf(buf);
};
crypt.prototype.encrypt_buf=function(buf) {
	return this.crypt.encrypt_buf(buf);
};

module.exports=crypt;
