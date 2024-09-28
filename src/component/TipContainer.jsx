import React , { Component } from "react";
import Button from "./Button";

class TipContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            tip: 0,
            view: true,
            person: 0,
            pTip: 0,
            total: 0,
            final: 0
        }
        // this.methodname = this.methodname.bind(this)
        this.readBill = this.readBill.bind(this);
        this.readTip = this.readTip.bind(this);
        this.readPerson = this.readPerson.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    // bill value read
    readBill(val) {
        this.setState({
            amount: val
        })
    }
    // tip value read
    readTip(val) {
       if(val === "custom") {
        this.setState({
            view: false
        })
       } else {
        this.setState({
            tip: val
        })
       }
    }
    // read person value
    readPerson(val) {
        this.setState({
            person: val
        })
    }
    // calculate total 
    calculate() {
        let tipTotal = Number(this.state.amount) * (Number(this.state.tip) / 100)
        let perTip = tipTotal / Number(this.state.person);
        let fianlBill = Number(this.state.amount) + tipTotal;
        console.log(`tipTotal =`, tipTotal)
        console.log(`perTip =`, perTip)
        this.setState({
            total: tipTotal,
            pTip: perTip,
            final: fianlBill
        })
    }
    render() {
        return (
            <div className="tip-container">
                <div className="left">
                    <div className="bill">
                        <label htmlFor="amount">Bill Amount (&#8377;)</label>
                        <input type="number" name="amount" id="amount" value={this.state.amount} onChange={(e) => this.readBill(e.target.value)} placeholder="bill amount" required />
                    </div>
                    <div>
                        <p>Tip Precentage (%)</p>
                    </div>
                    <div className="tip">
                        {
                            this.state.view ? (
                            <>
                                <Button title="5" class="primary" clickHandler={this.readTip}/>
                                <Button title="10" class="primary" clickHandler={this.readTip}/>
                                <Button title="15" class="primary" clickHandler={this.readTip}/>
                                <Button title="20" class="primary" clickHandler={this.readTip}/>
                                <Button title="25" class="primary" clickHandler={this.readTip}/>
                                <Button title="custom" class="secondary" clickHandler={this.readTip}/>
                            </>
                            ) : (
                                <div className="custom">
                        <label htmlFor="tip">Tip Percentage</label>
                        <input type="number" name="tip" id="tip" value={this.state.tip} onChange={(e) => this.readTip(e.target.value)} placeholder="tip percentage" />
                    </div>
                            )
                        }
                        
                    </div>
                    
                    <div className="person">
                        <label htmlFor="person">Persons</label>
                        <input type="number" name="person" id="person" value={this.state.person} onChange={(e) => this.readPerson(e.target.value)} placeholder="No. of persons" required />
                    </div>

                </div>
                <div className="right">
                    <div className="amount=block">
                        <div className="tip-amount">
                            <span className="tip-title">Tip-Percentage</span>
                            <span className="price">{this.state.tip}% </span>
                        </div>
                        <div className="tip-amount">
                            <span className="tip-title">Tip-Amount (/person)</span>
                            <span className="price"> &#8377; {this.state.pTip} </span>
                        </div>
                        <div className="tip-amount">
                            <span className="tip-title">Total Tip</span>
                            <span className="price"> &#8377; {this.state.total} </span>
                        </div>
                        <div className="tip-amount">
                            <span className="tip-title">Final Bill</span>
                            <span className="price"> &#8377; {this.state.final}</span>
                        </div>
                    </div>
                    <button className="primary" onClick={() => this.calculate()}>Calculate</button>
                    <button className="danger">Reset</button>
                </div>
            </div>
        )
    }
}

export default TipContainer;