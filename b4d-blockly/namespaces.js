
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

export class Namespace {

    // E.g. new Namespace(discordjs);
    constructor (name) {
        this.namespace = name;
    }

    static blocks = {}

    // Function to create a block for a namespace
    createBlock (block_name, data, pre_blockly = undefined) {

        // if given namespace key hasnt been written into Namespace.blocks yet, put any empty one to avoid errors
        if (!Namespace.blocks[this.namespace]) {
            Namespace.blocks[this.namespace] = {};
        }
        if(!Namespace.blocks[this.namespace][block_name]) {

            // if the block doesnt already exist insert the block info into the proper namespace
            Namespace.blocks[this.namespace] = {
                ...Namespace.blocks[this.namespace],
                [block_name]: { data, pre_blockly }
            };
            
            console.log(Namespace.blocks);
        } else {
            // Log error if given block already exists.
            console.error("[Error]: The block '" + block_name + "' under the namespace '" + this.namespace + "' already exists. Avoid overwriting blocks and use <namespace>.updateBlock instead");
        }

    }

    register(block_name) {

        // first we get the register_id by combinging the block name and its namespace like so 'namespace:block_name' , and then we also get its data
        const register_id = this.namespace + ":" + block_name
        const register_data = Namespace.blocks[this.namespace][block_name].data

        b4d.Blockly.Blocks[register_id] = {
            init: function() {
                this.jsonInit(register_data);
            }
        };
    }

    static RegisterFromNamespace(block_name, namespace) {

        // first two ifs are to check if the namespace, and the block name exist.

        if (Namespace.blocks[namespace]) {
            if (Namespace.blocks[this.namespace][block_name]) {
                
                // if both conditions are true we register it with blockly by passing the name, and getting the block data from blocks.data (assuming that said data exists)
                b4d.Blockly.Blocks[namespace + block_name] = {
                    init: function() {
                        this.jsonInit(Namespace.blocks[namespace][block_name].data);
                    }
                };
            } else {
                console.error("[Error]: The provided namespace '" + namespace + "' doesn't seem to exist.");
            }
        } else {
            console.error("[Error]: The provided block '" + block_name + "' under the namespace '" + namespace + "' doesn't seem to exist.");
        }


    }

    static registerAllOf (namespace) {

        // for loop all of the blocks from the given namespace
        
        for (let block in Namespace.blocks[namespace]) {
            Namespace.RegisterFromNamespace(block, namespace);
        }
    }
}