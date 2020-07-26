const Password=require('./model');
const crypt=require('cryptr');
const secret=require('../../SecretKeys/Secretmessage');

const cryptr= new crypt(secret);


//@description 
//Get method returns all the passwords for you. 
//decrypt each password of each application
//Show it to user
function isPresent(appname, database)
{
    
    database.forEach(element => {

        if(appname==element.appname)//returns true if the application is already present else false. 
        {
            throw new Error('isPresent');
        }
        
    });
    
}



/** 
 * This would be the GET function for returning all the JSON values in the databse
 * 
 */

exports.getpasswords= async (req,res)=>
{
    try {
        const allpasswords=await Password.find({});
        if((allpasswords.length==0))
        {
            res.status(200).json(
                {
                    success:"false",
                    message:"Database is Empty"
                }
            )
        }
        allpasswords.map(result => result.password = cryptr.decrypt(result.password));
        res.status(200).json(
            {
                passwords:allpasswords,
                success:"true",
                message: "You have recieved all your passwords"
            }
        )

        
    } catch (error) {
        res.status(500).json(
            {
                status:"Failed",
                error: error.message
            }
        )
        
    }
}



/**
 * POST method for creating a new password
 * 
 */
exports.addpassword = async (req,res)=>
{
    try {
        const {appname,password}=req.body;
        const database=await Password.find({});
        await isPresent(appname,database);
        

        //check the database if its already present or not.
        const hashedPassword=cryptr.encrypt(password);
        const entry=
        {
            appname:appname,
            password: hashedPassword
        }
        await Password.create(entry);
        res.status(200).json(
         {
             success:true,
             message:`You added the password for ${appname}`

         });
    } 
    
    catch (error) {
        if(error.message=='isPresent')
        {
        res.status(409).json(
                {
                    success:"false",
                    message:"The item you tried to POST is already present. Did you want to update it??"
                }
            )
        }
        else
        {
        res.status(500).json(
            {
                status:"Failed",
                error: error.message
            }
        )
        }
    }
}


//PUT method for updating a particular password
exports.updatepassword= async (req,res)=>
{
    console.log("In the update function")
    try {
        const id=req.params.id;
        const {appname,password}=req.body;
        const encryptedPassword=await cryptr.encrypt(password);
    
        const newEntry=
        {
            appname:appname,
            password: encryptedPassword
        }
        await Password.findByIdAndUpdate(id,newEntry);
        res.status(200).json(
            {
                success:true,
                message:`Your app ${appname} has new password ${password}`
            }
        )
        
    } 
    catch (error) {
        
        res.status(500).json(
            {
                status:"Failed",
                error: error.message
            }
        )
        
    }
   




}


exports.deletepassword= async(req,res)=>
{
    try {
        
        const id=req.params.id;
        await Password.findByIdAndRemove(id);
        res.status(200).json(
        {
            success:"true",
            message: "The file has been deleted succesfully"
        });

    } catch (error) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}