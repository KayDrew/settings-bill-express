import assert from "assert";
import SettingsBill from "../settings-bill.js";


describe("Test for settings-bill", function () {

    const settingsBill = SettingsBill();

   


    it("should return the call cost", function () {

        settingsBill.setSettings({
            "smsCost": 3,
            "callCost": 4,
            "warningLevel": 20,
            "criticalLevel": 30
        });

        assert.equal(4, settingsBill.getSettings().callCost)
    }
    );



    it("should return the sms cost", function () {

        settingsBill.setSettings({
            "smsCost": 3,
            "callCost": 4,
            "warningLevel": 20,
            "criticalLevel": 30
        });
        assert.equal(3, settingsBill.getSettings().smsCost)
    }
    );


    it("should return the warning level", function () {
        settingsBill.setSettings({
            "smsCost": 3,
            "callCost": 4,
            "warningLevel": 20,
            "criticalLevel": 30
        });

        assert.equal(20, settingsBill.getSettings().warningLevel)
    }
    );


    it("should return the critical level", function () {

        settingsBill.setSettings({
            "smsCost": 3,
            "callCost": 4,
            "warningLevel": 20,
            "criticalLevel": 30
        });
        assert.equal(30, settingsBill.getSettings().criticalLevel)
    }
    );


    it("should return the total call cost", function () {

        settingsBill.recordAction("call");
        settingsBill.recordAction("call");
        settingsBill.recordAction("call");

        assert.equal(12, settingsBill.totals().callTotal)
    }

    );


    it("should return the total sms cost", function () {

        settingsBill.recordAction("sms");
        settingsBill.recordAction("sms");
        settingsBill.recordAction("sms");

        assert.equal(9, settingsBill.totals().smsTotal)
    }

    );


    
    it("should return the grand total",function(){
    
            assert.equal(21,settingsBill.totals().grandTotal)
        }
    
        );
    

        it("should return whether or not the total cost has reached the warning level",function(){
    
            
        
                assert.equal(true,settingsBill.hasReachedWarningLevel())
            }
        
            );
        
            it("should return whether or not the total cost has reached the critical level",function(){
    
            
        
                assert.equal(false,settingsBill.hasReachedCriticalLevel())
                
                
        settingsBill.recordAction("call");
        settingsBill.recordAction("call");
        settingsBill.recordAction("call");
                assert.equal(true,settingsBill.hasReachedCriticalLevel())
            }
        
            );

  
           
            

});