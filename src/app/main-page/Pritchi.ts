export class Pritchi{
public pritchi:string[]=['	Начало мудрости - страх Господень; [доброе разумение у всех, водящихся им; а благоговение к Богу - начало разумения;] глупцы только презирают мудрость и наставление.'
,"Слушай, сын мой, наставление отца твоего и не отвергай завета матери твоей,потому что это - прекрасный венок для головы твоей и украшение для шеи твоей."
,"	Сын мой! если будут склонять тебя грешники, не соглашайся; если будут говорить: иди с нами, сделаем засаду для убийства, подстережем непорочного без вины,живых проглотим их, как преисподняя, и - целых, как нисходящих в могилу; наберем всякого драгоценного имущества, наполним домы наши добычею;	жребий твой ты будешь бросать вместе с нами, склад один будет у всех нас,	сын мой! не ходи в путь с ними, удержи ногу твою от стези их,	потому что ноги их бегут ко злу и спешат на пролитие кровиa"
,"И, приступив, ученики сказали Ему: для чего притчами говоришь им? Он сказал им в ответ: для того, что вам дано знать тайны Царствия Небесного, а им не дано, ибо кто имеет, тому дано будет и приумножится, а кто не имеет, у того отнимется и то, что имеет; потому говорю им притчами, что они видя не видят, и слыша не слышат, и не разумеют"
,"Я звала, и вы не послушались; простирала руку мою, и не было внимающего;и вы отвергли все мои советы, и обличений моих не приняли"
,



]
public getRandompritch(){
    return this.pritchi[this.getRandomInt(0,this.pritchi.length-1)];
}
public getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}