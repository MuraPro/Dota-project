https://regex101.com/
^\s+@\s+\.\s+$ -email

// import \* as yup from 'yup';

    // const validateScheme = yup.object().shape({
    //     password: yup
    //         .string()
    //         .required('Пароль обязателен для заполнения')
    //         .matches(
    //             /(?=.*[A-Z])/,
    //             'Пароль должен содержать хотя бы одну заглавную букву'
    //         )
    //         .matches(
    //             /(?=.*[0-9])/,
    //             'Пароль должен содержать хотя бы одно число'
    //         )
    //         .matches(
    //             /(?=.*[!@#$%^&*])/,
    //             'Пароль должен содержать один из специяльных символов (!,@,#,$,%,^,&,*)'
    //         )
    //         .matches(
    //             /(?=.{8,})/,
    //             'Пароль должен состоять минимум из 8 символов'
    //         ),
    //     email: yup
    //         .string()
    //         .required('Электронная почта обязательна для заполнения')
    //         .email('Email введен некорректно'),
    // });

const validate = () => {
const errors = validator(data, validatorConfig);
// validateScheme
// .validate(data)
// .then(() => setErrors({}))
// .catch((err) => setErrors({ [err.path]: err.message }));
setErrors(errors);
return Object.keys(errors).length === 0;
};

npm query-string i

import query from 'query-string

const serchParams = query.parse(loaction.search)

<Redirect from="/admin" to="/users" /> - переадресация

{
"rules": {
"user": {
".read":"auth != null",
".write": true
},
"ability": {
".read": true,
".write": true
},
"type": {
".read": true,
".write": false
},
"role":{
".read": true,
".write": false
},
"roles": {
".read": true,
".write": false
},
"attribute": {
".read": true,
".write": false
},
"comment": {
".read":"auth != null",
".indexOn":["pageId"],
"$cid":{
".write":"auth != null&& (data.child('userId').val() === auth.uid) || (newData.child('userId').val() === auth.uid)"
}
}  
 }
}

[
{
"\_id": "67rdca3eeb7f6fgeed471815",
"name": "Джон Дориан",
"email": "Jony7351@tw.com",
"password": "b2C!9bmE",
"profession": "67rdca3eeb7f6fgeed471818",
"qualities": [
"67rdca3eeb7f6fgeed471198",
"67rdca3eeb7f6fgeed471102",
"67rdca3eeb7f6fgeed471100"
],
"completedMeetings": 36,
"rate": 2.5
},
{
"\_id": "67rdca3eeb7f6fgeed471816",
"name": "Кокс",
"email": "white4571@twipet.com",
"password": "NSF-kQ7p",
"profession": "67rdca3eeb7f6fgeed471818",
"qualities": [
"67rdca3eeb7f6fgeed4711012",
"67rdca3eeb7f6fgeed471102",
"67rdca3eeb7f6fgeed471101"
],
"completedMeetings": 15,
"rate": 2.5
},
{
"\_id": "67rdca3eeb7f6fgeed471817",
"name": "Боб Келсо",
"email": "bob007@tw.com",
"password": "*cr6Lydn",
"profession": "67rdca3eeb7f6fgeed471818",
"qualities": ["67rdca3eeb7f6fgeed4711012"],
"completedMeetings": 247,
"rate": 3.5,
"bookmark": false
},
{
"\_id": "67rdca3eeb7f6fgeed471818",
"name": "Рэйчел Грин",
"email": "green7311@fam.biz",
"password": "*V7&Ks6D",
"profession": "67rdca3eeb7f6fgeed471820",
"qualities": ["67rdca3eeb7f6fgeed471102"],
"completedMeetings": 148,
"rate": 3.5,
"bookmark": false
},
{
"\_id": "67rdca3eeb7f6fgeed471819",
"name": "Шелдон Купер",
"email": "mindgames6878@phis.tech",
"password": "$8^M_LfY",
        "profession": "67rdca3eeb7f6fgeed471814",
        "qualities": ["67rdca3eeb7f6fgeed471100", "67rdca3eeb7f6fgeed471198"],
        "completedMeetings": 37,
        "rate": 4.6
    },
    {
        "_id": "67rdca3eeb7f6fgeed471820",
        "name": "Леонард Хофстедтер",
        "email": "mindes000@phis.tech",
        "password": "75gHX^Tj",
        "profession": "67rdca3eeb7f6fgeed471814",
        "qualities": ["67rdca3eeb7f6fgeed471100", "67rdca3eeb7f6fgeed471102"],
        "completedMeetings": 147,
        "rate": 3.5,
        "bookmark": false
    },
    {
        "_id": "67rdca3eeb7f6fgeed471821",
        "name": "Говард Воловиц",
        "email": "gov1903@phis.tech",
        "password": "k2+HWHq^",
        "profession": "67rdca3eeb7f6fgeed471822",
        "qualities": ["67rdca3eeb7f6fgeed471100", "67rdca3eeb7f6fgeed471198"],
        "completedMeetings": 72,
        "rate": 3.5,
        "bookmark": false
    },
    {
        "_id": "67rdca3eeb7f6fgeed471822",
        "name": "Никола Тесла",
        "email": "electro@underground.tech",
        "password": "K2vVmM^Z",
        "profession": "67rdca3eeb7f6fgeed471822",
        "qualities": ["67rdca3eeb7f6fgeed471102"],
        "completedMeetings": 72,
        "rate": 5
    },
    {
        "_id": "67rdca3eeb7f6fgeed471823",
        "name": "Моника Геллер",
        "email": "mono@super.com",
        "password": "Zu+9*V$E",
"profession": "67rdca3eeb7f6fgeed471829",
"qualities": ["67rdca3eeb7f6fgeed471100", "67rdca3eeb7f6fgeed471102"],
"completedMeetings": 17,
"rate": 4.5
},
{
"\_id": "67rdca3eeb7f6fgeed471824",
"name": "Рататуй",
"email": "ratatatata@underground.com",
"password": "RvJ-U2EC",
"profession": "67rdca3eeb7f6fgeed471829",
"qualities": ["67rdca3eeb7f6fgeed471102", "67rdca3eeb7f6fgeed4711012"],
"completedMeetings": 17,
"rate": 4.5
},
{
"\_id": "67rdca3eeb7f6fgeed47181f",
"name": "Джоуи Триббиани",
"email": "joe@trib.com",
"password": "z&\_r7VA8",
"profession": "67rdca3eeb7f6fgeed471824",
"qualities": ["67rdca3eeb7f6fgeed471102", "67rdca3eeb7f6fgeed471100"],
"completedMeetings": 434,
"rate": 3.5
},
{
"\_id": "67rdca3eeb7f6fgeed47181r",
"name": "Брэд Питт",
"email": "superstar@star.com",
"password": "89UhL^$d",
"profession": "67rdca3eeb7f6fgeed471824",
"qualities": ["67rdca3eeb7f6fgeed471102"],
"completedMeetings": 434,
"rate": 5
}
]

{
/\_ <div className="card-body text-white">

<h5 className="card-title">{"Berserker's Call"}</h5>
<div className="d-flex align-items-start gap-2 ">
<div className="mt-2">
<img src={ability1} alt="" width="80px" />
</div>
<div className="w-100 p-2">
<p>
Герой бросает вызов ближайшим врагам, заставляя
их атаковать его, а также получает бонус к броне
на время действия способности.
</p>
</div>
</div>
<div className="d-flex w-100 justify-content-between flex-wrap">
<div className="">
<p>Расход маны: 80/90/100/110</p>
</div>
<div className="">
<p>Перезарядка: 17/15/13/11</p>
</div>
<div className="">
<p>
Способность: ненаправленная Действует на:
врагов/себя Радиус: 315 (Талант: 415)
Дополнительная броня: 16/19/22/25 Длительность:
1,8/2,2/2,6/3
</p>
</div>
</div>
<div className="d-flex align-items-center flex-wrap">
<img src={AganimImg} alt="" width="30px" />
<DropDown title={`Aghanim's Scepter`}>
<div className="card-body">
<p style={{ textAlign: 'center' }}>
{`
                                        На затронутых способностью юнитов
                                        применяется эффект способности Battle
                                        Hunger. Уменьшает перезарядку
                                        Berserker's Call на 3 секунды.`}
</p>
</div>
</DropDown>
</div>
</div> _/
}

==================
"abilityTitle_2": "Unstable Concoction",
"abilityDescription_2": "Герой начинает встряхивать колбу с гремучей смесью, которую можно бросить во вражеского героя. При попадании колба взорвётся, оглушив всех противников в радиусе взрыва и нанеся им урон. Чем дольше смесь встряхивать, тем больше урона она нанесёт и тем дольше будет оглушение. Пока герой не бросит колбу, он передвигается быстрее. Максимальный эффект достигается после 5 сек., однако если не выбросить колбу через 5,5 секунды, она взорвётся в руках героя, подействовав и на него самого.",
"abilityTitle_3": "Unstable Concoction Throw",
"abilityDescription_3": "Способность: направленная на юнита.",
"abilityTitle_4": "Corrosive Weaponry",
"abilityDescription_4": "Покрытое кислотой оружие героя снижает сопротивление эффектам и скорость передвижения у жертв его атак. Этот эффект складывается.",
"abilityTitle_5": "Greevil's Greed",
"abilityDescription_5": "Способность: пассивная. Позволяет синтезировать больше золота из врагов и рун. Дополнительное золото за убийство существ состоит из начального бонуса и нарастающего, который увеличивается с каждым существом, убитым в течение 36 сек. после предыдущего. Также способность умножает золото от рун богатства.",
"abilityTitle_6": "Berserk Potion",
"abilityDescription_6": "Бросает в союзника зелье, которое применяет на него нормальное развеивание, увеличивает восстановление здоровья, а также ускоряет атаку и передвижение.",
"abilityTitle_7": "Chemical Rage",
"abilityDescription_7": "Особая химическая смесь разъяряет героя, отчего задержка перед его атакой уменьшается, а скорость его передвижения и восстановление здоровья увеличиваются."

[
{
"\_id": "67rdca3eeb7f6fgeed471815",
"name": "Axe",
"email": "axe@www.com",
"password": "Qwerty12345",
"attributes": "67rdca3eeb7f6fgeed471610",
"roles": ["67rdca3eeb7f6fgeed471810"],
"description": "Ещё будучи рядовым бугаем в армии Красного тумана, Могул-хан положил глаз на генеральский титул. Битву за битвой он самыми кровавыми способами доказывал собственное превосходство. Облегчало подъём в чинах и то, что без тени сомнения он мог обезглавить старшего по званию. В семилетней кампании на Тысячеболотье Могул-хан отличился в кровопролитных бойнях, и звезда его славы засияла еще ярче, но число соратников неизменно сокращалось. В ночь безоговорочной победы он провозгласил себя генералом Красного тумана, присвоив себе заодно и титул верховного военачальника. Однако теперь в его отряде не значилось ни одного воина. Множество бойцов было повержено врагом, но и от его топора погибло достаточно. Стоит ли говорить, что большинство солдат теперь ни за что не переманить под его знамена? Но Могул-хана это совсем не смущает, ведь он знает: один в поле воин.",
"image": "",
"force": "25 + 2,8",
"dexterity": "20 + 1,7",
"intelligence": "18 + 1,6",
"sword": "30 - 34",
"speed": "0",
"shield": "315",
"ability": [
{
"title": "Berserker's Call",
"ability": "Герой бросает вызов ближайшим врагам, заставляя их атаковать его, а также получает бонус к броне на время действия способности."
},
{
"title": "Battle Hunger",
"ability": "Приводит врага в бешенство, нанося ему урон, пока он кого-нибудь не убьёт или действие способности не закончится. Урон от способности увеличивается в зависимости от брони владельца способности. Скорость передвижения жертвы уменьшается, когда она не смотрит в сторону владельца способности."
},
{
"title": "Counter Helix",
"ability": "После определённого числа полученных атак герой прокручивает вокруг себя топор, нанося чистый урон всем врагам неподалёку."
},
{
"title": "Culling Blade",
"ability": "Герой находит слабую точку врага и наносит ему чистый урон. Если убить этой способностью вражеского героя, её перезарядка сбрасывается, броня её владельца навсегда увеличится, а он и его союзники поблизости временно получат дополнительную скорость передвижения и броню."
}
]
},
{
"\_id": "67rdca3eeb7f6fgeed4718231",
"name": "Alchemist",
"email": "alchemist@www.com",
"password": "Qwerty12345",
"attributes": "67rdca3eeb7f6fgeed471610",
"roles": ["67rdca3eeb7f6fgeed471810"],
"description": "Преданность священной алхимии была традицией рода Темноваров, но никто еще никогда не показывал столько изобретательности, амбиций и безрассудства, сколько проявил юный Раззил. Повзрослев, он оставил семейное дело и решил попробовать себя в производстве золота. В присущей ему манере он объявил, что обратит в золото целую гору. Спустя два десятилетия исследований, вложений и подготовок он с треском провалился, попав за решетку за множественные разрушения, причиненные экспериментом. Однако Раззил был не из робкого десятка и тщательно обдумывал варианты побега, чтобы продолжить свои исследования. Когда его новым сокамерником оказался свирепый великан-людоед, алхимик увидел в нем столь желанную возможность для побега. Уговорив гиганта не съедать его, Раззил начал тщательно составлять настойку из плесени и мха, найденных во время исправительных работ. Через неделю она созрела. Когда великан выпил зелье, он впал в ослепительную ярость, разорвал железные прутья, разнес стены и перебил всю стражу. Скоро они затерялись где-то в лесу, окружавшем город, оставив за собой следы разрушений и никаких признаков погони. Когда действие тоника отошло, людоед чувствовал себя вполне хорошо и выглядел счастливым и вполне энергичным. Решив работать вместе, с тех пор парочка собирает материалы, необходимые Раззилу, чтобы в очередной раз попытать удачу.",
"image": "",
"force": "23 + 2,7",
"dexterity": "22 + 1,5",
"intelligence": "25 + 1,8",
"sword": "27 - 33",
"speed": "0",
"shield": "295",
"ability": [
{
"title": "Acid Spray",
"ability": "Распыляет в указанной области облако кислоты, которое наносит врагам периодический урон и снижает их броню."
},
{
"title": "Unstable Concoction",
"ability": "Герой начинает встряхивать колбу с гремучей смесью, которую можно бросить во вражеского героя. При попадании колба взорвётся, оглушив всех противников в радиусе взрыва и нанеся им урон. Чем дольше смесь встряхивать, тем больше урона она нанесёт и тем дольше будет оглушение. Пока герой не бросит колбу, он передвигается быстрее. Максимальный эффект достигается после 5 сек., однако если не выбросить колбу через 5,5 секунды, она взорвётся в руках героя, подействовав и на него самого."
},
{
"title": "Unstable Concoction Throw",
"ability": "Способность: направленная на юнита."
},
{
"title": "Corrosive Weaponry",
"ability": "Покрытое кислотой оружие героя снижает сопротивление эффектам и скорость передвижения у жертв его атак. Этот эффект складывается."
},
{
"title": "Greevil's Greed",
"ability": "Способность: пассивная. Позволяет синтезировать больше золота из врагов и рун. Дополнительное золото за убийство существ состоит из начального бонуса и нарастающего, который увеличивается с каждым существом, убитым в течение 36 сек. после предыдущего. Также способность умножает золото от рун богатства."
},
{
"title": "Berserk Potion",
"ability": "Бросает в союзника зелье, которое применяет на него нормальное развеивание, увеличивает восстановление здоровья, а также ускоряет атаку и передвижение."
},
{
"title": "Chemical Rage",
"ability": "Особая химическая смесь разъяряет героя, отчего задержка перед его атакой уменьшается, а скорость его передвижения и восстановление здоровья увеличиваются."
}
]
}
]

{
// "\_id": "67rdca3eeb7f6fgeed47187561",
// "data": [
// {
// "title": "Название способности.",
// "ability": "Описание способности."
// }
// ]
// },

     {/* <RolesCard data={user.roles} />
                    <HeroTypeCard user={user} /> */}

<div className="row justify-content-center ">
                <div className="col-md-8">
                    <div className="card mt-5 border-info">
                        <div className="card-body">
                            <h5 className="card-title text-center text-info">
                                Нет избранных персонажей
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

"$cid":{
".write":"auth != null&& (data.child('userId').val() === auth.uid) || (newData.child('userId').val() === auth.uid)"
}

// getComments: async (pageId) => {
// const { data } = await httpService.get(commentEndpoint, {
// params: {
// orderBy: '"pageId"',
// equalTo: `"${pageId}"`
// }
// });
// return data;
// },

<ProtectedRoute
                            path="/users/:userId?/:edit?"
                            component={Users}
                        />

{
/_ <div className={styles.main_container}>
<h1 className={styles.gradient_text}>Играй-ка.</h1>
<div className={styles.text_block}>
<span>
<p>Почувствуй себя создателем игр.</p>
</span>
<span>
<p>Регистрируйся и получи доступ.</p>
</span>
</div>
</div> _/
}
