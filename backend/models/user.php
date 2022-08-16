<?php
//object to return
class UserRes
{
    public $Status;
    public $Message;

    public function set_res($Status, $Message)
    {
        $this->Status = $Status;
        $this->Message = $Message;
    }
}

//user model
class UserClass
{
    private $username;
    private $password;

    public function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    //find if use exist in databse
    function findUser()
    {
        //get DB
        $db = new SQLite3("./mydb.db");

        //object to return
        $res = new UserRes();

        //set query
        $statement = $db->prepare("SELECT Username, Password FROM users WHERE Username = '$this->username'");
        $result = $statement->execute();
        $row = $result->fetchArray();

        //return true or false if user exist in database.
        if ($row) {
            //password matches
            if(password_verify($this->password, $row['Password'])) {
                $res->set_res(200, "Sign in sucessful");
            }

            //password doesn't match
            if(!password_verify($this->password,$row['Password'])) {
                $res->set_res(401, "Wrong email / password");
            }
        } else {
            $res->set_res(401, "Wrong email / password");
        };

        return $res;
    }

    //create user
    function createUser() {
        //get db
        $db = new SQLite3("./mydb.db");

        //object to return
        $res = new UserRes();
        
        //check in db if user already exist
        $statement = $db->prepare("SELECT Username, Password FROM users WHERE Username = '$this->username'");
        $result = $statement->execute();
        $row = $result->fetchArray();

        if ($row) {
            $res->set_res(409, "User already exist");
            return $res;
        }


        //hash password then store to db
        $hash = password_hash($this->password, PASSWORD_DEFAULT);

        $result =  $db->exec("INSERT INTO users(Username, Password) VALUES('$this->username', '$hash')");
        
        if ($result) {
            $res->set_res(201, "Sign up successful");
        } else {
            $res->set_res(500, "Error in signing up");
        }
        
        return $res;
    }
}
?>