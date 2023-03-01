
This is a sample code

const [key,setKey]=useState(()=>parseInt(Math.random()*2000))

 <TagsBuilder
        tags={tags}
        addTags={value => setTags([...tags,{id:new Date().getTime(),title:value}])}
      />

      const TagsBuilder = ({tags, addTags}) => {
         <div className="tags-display">
        {tags &&
          tags.map(({id, title}) => (
            <div className="tag" key={id}>
              {title}
            </div>
          ))}
      </div>
      }