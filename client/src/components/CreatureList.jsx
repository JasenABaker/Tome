import React from 'react'
import {StatBlock, OrangeBorder, OrangeBorderBottom, CreatureHeading,TaperedRule,
        PropertyLineFirst, PropertyLine, PropertyLineLast, Abilities,
        AbilitiesDiv, PropertyBlock, Actions} from './styled components/DndCard'


let prop1 = null
let prop2 = null
let prop3 = null
let prop4 = null
let prop5 = null
let legend = null
let spec = null


const CreatureList = (props) => {
    const creature = props.creature
    
    if(!(creature.damage_immunities === "")){
        prop1 =  <PropertyLineFirst>
        <h4>Damage Immunities: </h4>
        <p>{creature.damage_immunities}</p>
    </PropertyLineFirst>
        
    }else {
        prop1 = null
    
    }
    if(!(creature.damage_vulnerabilities === "")){
        prop2 =  <PropertyLineFirst>
        <h4>Damage Vulnerabilities: </h4>
        <p>{creature.damage_vulnerabilities}</p>
    </PropertyLineFirst>
        
    }else {
        prop2 = null
    
    }
    if(!(creature.damage_resistances === "")){
        prop3 =  <PropertyLineFirst>
        <h4>Damage Resistances: </h4>
        <p>{creature.damage_resistances}</p>
    </PropertyLineFirst>
        
    }else {
        prop3 = null
    
    }
    if(!(creature.condition_immunities === "")){
        prop4 =  <PropertyLineFirst>
        <h4>Condition Immunities: </h4>
        <p>{creature.condition_immunities}</p>
    </PropertyLineFirst>
        
    }else {
        prop4 = null
    
    }

    if(!(creature.languages === "")){
        prop5 =  <PropertyLineFirst>
        <h4>Languages: </h4>
        <p>{creature.languages}</p>
    </PropertyLineFirst>
        
    }else {
        prop5 = null
    
    }
    if(creature.special_abilities){
        spec = creature.special_abilities.map((abl)=>{
            return (
                <PropertyBlock>
            <h4>{abl.name}. </h4>
            <p>{abl.desc}</p>
            </PropertyBlock>
            )
        }
    )
    } else {
        spec = null
    }

    if (creature.legendary_actions){
        legend = creature.legendary_actions.map((act)=>{
            return(<Actions>
                <h3>Legendary Actions</h3>
                <PropertyBlock>
                    <h4>{act.name}. </h4>
                    <p>{act.desc}</p>
                </PropertyBlock> 
    </Actions>

            )
        })
    }else {
        legend = null
    }

    return (
        <StatBlock>
            <OrangeBorder />
            
                <CreatureHeading>
                    <h1>{creature.name}</h1>
                    <h2>{creature.size} {creature.type}, {creature.alignment}</h2>
                </CreatureHeading> 
    <TaperedRule height="5" width="100%" > {/* svg  */}
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </TaperedRule>
                
                    <PropertyLineFirst>
                        <h4>Armor Class:</h4>
                        <p>{creature.armor_class}</p>
                    </PropertyLineFirst> 
			<PropertyLine>
                        <h4>Hit Points:</h4>
                        <p>{creature.hit_points} ({creature.hit_dice})</p>
                    </PropertyLine> 
			<PropertyLineLast>
                        <h4>Speed:</h4>
                        <p>{creature.speed}</p>
                    </PropertyLineLast>
			<TaperedRule height="5" width="100%" >
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </TaperedRule>
                    <Abilities>
                        <AbilitiesDiv>
                            <h4>STR</h4>
                            <p>{creature.strength}</p>
                        </AbilitiesDiv> 
				<AbilitiesDiv>
                            <h4>DEX</h4>
                            <p>{creature.dexterity}</p>
                        </AbilitiesDiv>
				<AbilitiesDiv>
                            <h4>CON</h4>
                            <p>{creature.constitution}</p>
                        </AbilitiesDiv>
				<AbilitiesDiv>
                            <h4>INT</h4>
                            <p>{creature.intelligence})</p>
                        </AbilitiesDiv>
				<AbilitiesDiv>
                            <h4>WIS</h4>
                            <p>{creature.wisdom}</p>
                        </AbilitiesDiv>
				<AbilitiesDiv>
                            <h4>CHA</h4>
                            <p>{creature.charisma}</p>
                        </AbilitiesDiv>
			</Abilities> 
			<TaperedRule height="5" width="100%" >
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </TaperedRule>
                    {prop1}
                    {prop2}
                    {prop3}
                    {prop4}
			
			<PropertyLine>
                        <h4>Senses: </h4>
                        <p>{creature.senses}.</p>
                    </PropertyLine>
			    {prop5}
			<PropertyLineLast>
                        <h4>Challenge: </h4>
                        <p>{creature.challenge_rating}</p>
                    </PropertyLineLast>

		<TaperedRule height="5" width="100%" >
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </TaperedRule>
		
                
                <Actions>
                    <h3>Actions</h3>

                    {creature.actions.map((act)=>{ 
                        return(
                    <PropertyBlock>
                        <h4>{act.name}. </h4>
                        <p>{act.desc}</p>
                    </PropertyBlock> 
                        )
                })}
			{spec}
		</Actions>
		{legend}
	<OrangeBorderBottom />
        </StatBlock>
    )
}

export default CreatureList