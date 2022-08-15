<?php
//object to return
class UserRes
{
    public $Status;
    public $Message;

    function __construct($Status, $Message)
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

    function __construct($username, $password)
    {
        $this->username = $username;
        $this->password = $password;
    }

    //find if use exist in databse
    function findUser()
    {
        //get DB
        $db = new SQLite3("../mydb.db");

        //set query
        $statement = $db->prepare("SELECT * FROM users WHERE Username = '$this->username'");
        $result = $statement->execute();
        $row = $result->fetchArray();

        //return true or false if user exist in database.
        if ($row) return true;

        return false;
    }

    //create user
    function createUser() {
        //get db
        $db = new SQLite3("../mydb.db");

        //hash password then store to db
        $hash = password_hash($this->password, PASSWORD_DEFAULT);

        $result =  $db->exec("INSERT INTO users(Username, Password) VALUES('$this->username', '$hash')");
        
        if ($result) {
            echo json_encode(array("Status"=>201, "Message"=>"Sign up successful"));
        } else {
            echo "Error";
        }
        
    }
}
?>
