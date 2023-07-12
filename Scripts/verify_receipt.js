
re('("expires_date"):"\\w{4}@("expires_date_pst"):"\\w{4}@("expires_date_ms"):"\\w+"@("is_trial_period"):"\\w+"','$1:"2099@$1:"2099@$1:"4096019658000"@$1:"false"','"cancellation_date":"\\S+\\s\\S+\\s\\w+\\W\\w+",@"cancellation_date_pst":"\\S+\\s\\S+\\s\\w+\\W\\w+",@"cancellation_date_ms":"\\d+",@"cancellation_reason":"\\d",')

function re(){
    let body = $response.body
    if(!body){$done()}
    if(arguments[0].includes("@")) {
        let regs = arguments[0].split("@");
        let strs = arguments[1].split("@");
        for (i = 0;i < regs.length;i++) {
            let reg = new RegExp(regs[i],"g");
            body = body.replace(reg, strs[i]);
        }
    }else {
        let reg = new RegExp(arguments[0],"g");
        body = body.replace(reg, arguments[1]);
    }
    if(body.includes("cancellation")){
        let regs = arguments[2].split("@")
        for ( let i = 0; i<regs.length; ++i){
            let reg = new RegExp(regs[i], "g")
            body = body.replace(reg, '')
        }
    }

    console.log(body)
    $done(body)
}

