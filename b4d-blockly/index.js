export class Block {

    static namespaces = [];
    static blocks = {};

    static register(namespace, block) {
        b4d.Blockly.Blocks[namespace + ":" + block] = {
            init: function() {
                this.jsonInit(Block.blocks[namespace][block]);
            }
        };
    }
    static registerAllOf(namespace) {

        for (const Item in Block.blocks[namespace]) {
            b4d.Blockly.Blocks[namespace + ":" + Item] = {
                init: function() {
                    this.jsonInit(Block.blocks[namespace][Item]);
                }
            };
        }
    }

    constructor(namespace, block_name, data) {
        this.namespace = namespace;
        this.block_name = block_name;
        this.data = data;
    }

    attach() {
        if (!Block.blocks[this.namespace]) Block.blocks[this.namespace] = {};
        Block.blocks[this.namespace][this.block_name] = this.data;

        if (!Block.namespaces.includes(this.namespace)) {
            Block.namespaces.push(this.namespace);
        }

        
    }


}
