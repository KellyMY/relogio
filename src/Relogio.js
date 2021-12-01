import { checkPropTypes } from "prop-types";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
// import { FaClock } from 'react-icons/fa';

export default class Relogio extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            classNameType: '',
            classNameWeek: '',
        }
    }
    render(){
        var time = this.state.date.toLocaleTimeString();

            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameType = 'dark';
                var classNameBody = 'body-dark';
            }else if(time > '23:00:00' || time <= '05:00:00'){
                var classNameType = 'dark-medium';
                var classNameBody = 'body-dark-medium';
            }else{
                var classNameType = 'light';
                var classNameBody = 'body-light';
            }

            document.body.classList.add(classNameBody);

            var week = this.state.date.toLocaleString(window.navigator.language, {weekday: 'long'});

        if(week == 'segunda'){
            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameWeek = 'week-dark-monday';
            }else if(time > '23:00:00' && time <= '05:00:00'){
                var classNameWeek = 'week-dark-medium-monday';
            }else{
                var classNameWeek = 'week-light-monday';
            }
        }else if(week == 'terça'){
            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameWeek = 'week-dark-tuesday';
            }else if(time > '23:00:00' && time <= '05:00:00'){
                var classNameWeek = 'week-dark-medium-tuesday';
            }else{
                var classNameWeek = 'week-light-tuesday';
            }
        }else if(week == 'quarta'){
            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameWeek = 'week-dark-wednesday';
            }else if(time > '23:00:00' && time <= '05:00:00'){
                var classNameWeek = 'week-dark-medium-wednesday';
            }else{
                var classNameWeek = 'week-light-wednesday';
            }
        }else if(week == 'quinta'){
            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameWeek = 'week-dark-thursday';
            }else if(time > '23:00:00' && time <= '05:00:00'){
                var classNameWeek = 'week-dark-medium-thursday';
            }else{
                var classNameWeek = 'week-light-thursday';
            }
        }else if(week == 'sexta'){
            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameWeek = 'week-dark-friday';
            }else if(time > '23:00:00' && time <= '05:00:00'){
                var classNameWeek = 'week-dark-medium-friday';
            }else{
                var classNameWeek = 'week-light-friday';
            }
        }else if(week == 'sábado'){
            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameWeek = 'week-dark-saturday';
            }else if(time > '23:00:00' && time <= '05:00:00'){
                var classNameWeek = 'week-dark-medium-saturday';
            }else{
                var classNameWeek = 'week-light-saturday';
            }
        }else{
            if(time >= '18:00:00' && time <= '23:00:00'){
                var classNameWeek = 'week-dark-sunday';
            }else if(time > '23:00:00' && time <= '05:00:00'){
                var classNameWeek = 'week-dark-medium-sunday';
            }else{
                var classNameWeek = 'week-light-sunday';
                
            }
        }
        var style = classNameType;
        var atual = this.state.classNameType;
        
        if(atual != ''){
            if(style != atual){
                window.location.reload();
            }

        }

        var style_week = classNameWeek;
        var atual_week = this.state.classNameWeek;
        
        if(atual_week != ''){
            if(style_week != atual_week){
                window.location.reload();
            }

        }
       
// console.log('style:',style);
// console.log('class trocado:',this.state.classNameType);
        return (
                <div className={(this.state.classNameType ? this.state.classNameType : classNameType)}>{this.state.teste}
                    <div className="hour">{this.state.date.toLocaleTimeString()}</div>
                    <span className="letter"><span className={(this.state.classNameWeek ? this.state.classNameWeek : classNameWeek)}>{this.state.date.toLocaleString(window.navigator.language, {weekday: 'long'})}</span> - 
                    <span className="date"> {this.state.date.toLocaleDateString()}</span></span>
                </div>
        );
    }
    componentDidMount(){
        const sec = 1000;
        setInterval(()=>{
            setTimeout(() => {
                
            
            var time = this.state.date.toLocaleTimeString();

            if(time >= '18:00:00' && time <= '23:00:00'){
                this.state.classNameType = 'dark';
                var classNameBody = 'body-dark';
            }else if(time > '23:00:00' || time <= '05:00:00'){
                this.state.classNameType = 'dark-medium';
                var classNameBody = 'body-dark-medium';
            }else{
                this.state.classNameType = 'light';
                var classNameBody = 'body-light';
            }

            document.body.classList.add(classNameBody);

            var week = this.state.date.toLocaleString(window.navigator.language, {weekday: 'long'});

            if(week == 'segunda'){
                if(time >= '18:00:00' && time <= '23:00:00'){
                    this.state.classNameWeek = 'week-dark-monday';
                }else if(time > '23:00:00' && time <= '05:00:00'){
                    this.state.classNameWeek = 'week-dark-medium-monday';
                }else{
                    this.state.classNameWeek = 'week-light-monday';
                }
            }else if(week == 'terça'){
                if(time >= '18:00:00' && time <= '23:00:00'){
                    this.state.classNameWeek = 'week-dark-tuesday';
                }else if(time > '23:00:00' && time <= '05:00:00'){
                    this.state.classNameWeek = 'week-dark-medium-tuesday';
                }else{
                    this.state.classNameWeek = 'week-light-tuesday';
                }
            }else if(week == 'quarta'){
                if(time >= '18:00:00' && time <= '23:00:00'){
                    this.state.classNameWeek = 'week-dark-wednesday';
                }else if(time > '23:00:00' && time <= '05:00:00'){
                    this.state.classNameWeek = 'week-dark-medium-wednesday';
                }else{
                    this.state.classNameWeek = 'week-light-wednesday';
                }
            }else if(week == 'quinta'){
                if(time >= '18:00:00' && time <= '23:00:00'){
                    this.state.classNameWeek = 'week-dark-thursday';
                }else if(time > '23:00:00' && time <= '05:00:00'){
                    this.state.classNameWeek = 'week-dark-medium-thursday';
                }else{
                    this.state.classNameWeek = 'week-light-thursday';
                }
            }else if(week == 'sexta'){
                if(time >= '18:00:00' && time <= '23:00:00'){
                    this.state.classNameWeek = 'week-dark-friday';
                }else if(time > '23:00:00' && time <= '05:00:00'){
                    this.state.classNameWeek = 'week-dark-medium-friday';
                }else{
                    this.state.classNameWeek = 'week-light-friday';
                }
            }else if(week == 'sábado'){
                if(time >= '18:00:00' && time <= '23:00:00'){
                    this.state.classNameWeek = 'week-dark-saturday';
                }else if(time > '23:00:00' && time <= '05:00:00'){
                    this.state.classNameWeek = 'week-dark-medium-saturday';
                }else{
                    this.state.classNameWeek = 'week-light-saturday';
                }
            }else{
                if(time >= '18:00:00' && time <= '23:00:00'){
                    this.state.classNameWeek= 'week-dark-sunday';
                }else if(time > '23:00:00' && time <= '05:00:00'){
                    this.state.classNameWeek = 'week-dark-medium-sunday';
                }else{
                    this.state.classNameWeek = 'week-light-sunday';
                    
                }
            }
        }, sec);
        
            this.setState({date: new Date(), classNameWeek: this.state.classNameWeek, classNameType: this.state.classNameType});
        },sec)
    }
    
    
}